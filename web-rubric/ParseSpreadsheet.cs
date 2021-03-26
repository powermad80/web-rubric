using System;
using System.Data.OleDb;
using System.Configuration;
public class XLReader
{
    public void ParseAndRead(string file)
    {
        string ConStr = ConfigurationManager.ConnectionStrings["xls"].ConnectionString;
    }
}