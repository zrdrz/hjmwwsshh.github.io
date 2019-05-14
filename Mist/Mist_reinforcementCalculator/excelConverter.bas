Attribute VB_Name = "模块1"
Public Sub output()

    Dim lngRow          As Long ''定义行数
    Dim strContent      As String ''输出的文本
    Dim objSheet        As Worksheet
    Set objSheet = ActiveWorkbook.Sheets(1)
    Open ThisWorkbook.Path & "\output.txt" For Output As #1 ''打开文件准备输出
    
    Dim shipid As Integer ''定义shipid
    Dim shipname As String
    Dim shiptypeid As Integer
    Dim shiptypename As String
    Dim shipstars As Integer
    Dim reinGroupnum As Integer ''强化组数量
    Dim shipstarPrefix As String ''根据舰船星级定义的后缀
    Dim shiptypePrefix As String ''根据舰船类型定义的后缀
    Dim actskillname As String
    Dim actcumid As String
    Dim passskillname1 As String
    Dim passskillname2 As String
    Dim passcumid As String
    
    For lngRow = 3 To 117 ''手动指定数据所在的行号
        Dim line1, line2, line3, line4, line5, line6, line7, line8, lineRein, line9, line10, lineAct, line11, line12, linePass1, linePass2, line13 As String
        Dim lastline As String
        
        shipid = objSheet.Cells(lngRow, 1) ''shipid
        shipname = objSheet.Cells(lngRow, 2) ''shipname
        shiptypename = objSheet.Cells(lngRow, 7) ''舰船类型
        Select Case shiptypename ''根据shiptypename定义shipid(因为表格里没有),和后缀
            Case "驱逐"
                shiptypeid = 1
                shiptypePrefix = "_dd"
            Case "轻巡"
                shiptypeid = 2
                shiptypePrefix = "_clca"
            Case "重巡"
                shiptypeid = 3
                shiptypePrefix = "_clca"
            Case "战巡"
                shiptypeid = 4
                shiptypePrefix = "_bbbc"
            Case "战列"
                shiptypeid = 5
                shiptypePrefix = "_bbbc"
            Case "航母"
                shiptypeid = 6
                shiptypePrefix = "_cv"
        End Select
        shipstars = objSheet.Cells(lngRow, 3)
        reinGroupnum = objSheet.Cells(lngRow, 3) + 1
        If shipstars = 2 Then ''2星船也有4个强化组
        reinGroupnum = 4
        End If
        
        Select Case shipstars ''根据舰船星级定义的后缀
            Case 5
                shipstarPrefix = "_star5"
            Case 4
                shipstarPrefix = "_star4"
            Case 3
                shipstarPrefix = "_star3"
            Case 2
                shipstarPrefix = "_star2"
        End Select
        
        lineRein = ""
        For i = 1 To reinGroupnum
            Dim reinName, realreinName As String
            Dim initvalue As Integer
            Dim consumptionID As String
            
            reinName = objSheet.Cells(lngRow, 10 + i)
            initvalue = objSheet.Cells(lngRow, 16 + i)
            Select Case reinName ''将强化组名和强化组的消耗id做好对应关系
                Case "耐久+"
                    consumptionID = "rein_health" & shipstarPrefix
                    realreinName = "耐久"
                Case "炮击+"
                    consumptionID = "rein_gunfirepower" & shipstarPrefix
                    realreinName = "炮击"
                Case "舰爆+"
                    consumptionID = "rein_gunfirepower" & shipstarPrefix
                    realreinName = "舰爆"
                Case "雷击+"
                    consumptionID = "rein_torpedofirepower" & shipstarPrefix
                    realreinName = "雷击"
                Case "舰攻+"
                    consumptionID = "rein_torpedofirepower" & shipstarPrefix
                    realreinName = "舰攻"
                Case "对空+"
                    consumptionID = "rein_aa" & shipstarPrefix
                    realreinName = "对空"
                Case "攻速+"
                    consumptionID = "rein_atkspeed" & shipstarPrefix
                    realreinName = "攻速"
                Case "暴击+"
                    consumptionID = "rein_critcorrection" & shipstarPrefix
                    realreinName = "暴击"
                Case "韧性+"
                    consumptionID = "rein_critdef" & shipstarPrefix
                    realreinName = "韧性"
                Case "命中+"
                    consumptionID = "rein_accuracycorrection" & shipstarPrefix
                    realreinName = "命中"
                Case "闪避+"
                    consumptionID = "rein_evdcorrection" & shipstarPrefix
                    realreinName = "闪避"
                Case "水抗+"
                    consumptionID = "rein_flooddef" & shipstarPrefix
                    realreinName = "水抗"
                Case "火抗+"
                    consumptionID = "rein_burndef" & shipstarPrefix
                    realreinName = "火抗"
                Case "移速+"
                    consumptionID = "rein_movespeed" & shipstarPrefix
                    realreinName = "移速"
                Case "索敌+"
                    consumptionID = "rein_scouting" & shipstarPrefix
                    realreinName = "索敌"
                Case "负重+"
                    consumptionID = "rein_costup" & shipstarPrefix
                    realreinName = "负重"
            End Select
            lineRein = lineRein & "        " & i & ": { name: '" & realreinName & "', initvalue: " & initvalue & ", consumptionID: '" & consumptionID & "',}," & vbLf
        Next
        
        actskillname = objSheet.Cells(lngRow, 8)
        actcumid = "act" & shipstarPrefix
        passskillname1 = objSheet.Cells(lngRow, 9)
        passskillname2 = objSheet.Cells(lngRow, 10)
        passcumid = "passive" & shiptypePrefix & shipstarPrefix
                
        line1 = "shipdata[" & shipid & "] = {" & vbLf
        line2 = "    " & "id: " & shipid & "," & vbLf
        line3 = "    " & "name: '" & shipname & "'," & vbLf
        line4 = "    " & "shiptypeid: " & shiptypeid & "," & vbLf
        line5 = "    " & "shiptypename: '" & shiptypename & "'," & vbLf
        line6 = "    " & "shipstars: " & shipstars & "," & vbLf
        line7 = "    " & "reinforcementGroupNum: " & reinGroupnum & "," & vbLf
        line8 = "    " & "reinforcementGroups: {" & vbLf
        line9 = "    }," & vbLf
        line10 = "    " & "activeSkills: {" & vbLf
        lineAct = "        1:{ name: '" & actskillname & "', consumptionID: '" & actcumid & "', }," & vbLf
        line11 = "    }," & vbLf
        line12 = "    " & "passiveSkills: {" & vbLf
        linePass1 = "        1: { name: '" & passskillname1 & "', consumptionID: '" & passcumid & "',}," & vbLf
        linePass2 = "        2: { name: '" & passskillname2 & "', consumptionID: '" & passcumid & "',}," & vbLf
        line13 = "    }," & vbLf
        lastline = "};" & vbLf
        
        
        
        strContent = strContent & line1 & line2 & line3 & line4 & line5 & line6 & line7 & line8 & lineRein & line9 & line10 & lineAct & line11 & line12 & linePass1 & linePass2 & line13 & lastline

    Next
    
    Print #1, strContent ''输出文件
    Close #1
    MsgBox ("完成!")
End Sub
