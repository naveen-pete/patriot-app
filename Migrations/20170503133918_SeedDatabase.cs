using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Patriot.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Make 1')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Make 2')");
            migrationBuilder.Sql("INSERT INTO Makes (Name) VALUES ('Make 3')");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 1 - Model A', (SELECT ID FROM Makes WHERE Name='Make 1'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 1 - Model B', (SELECT ID FROM Makes WHERE Name='Make 1'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 1 - Model C', (SELECT ID FROM Makes WHERE Name='Make 1'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 2 - Model A', (SELECT ID FROM Makes WHERE Name='Make 2'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 2 - Model B', (SELECT ID FROM Makes WHERE Name='Make 2'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 2 - Model C', (SELECT ID FROM Makes WHERE Name='Make 2'))");

            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 3 - Model A', (SELECT ID FROM Makes WHERE Name='Make 3'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 3 - Model B', (SELECT ID FROM Makes WHERE Name='Make 3'))");
            migrationBuilder.Sql("INSERT INTO Models (Name, MakeID) VALUES ('Make 3 - Model C', (SELECT ID FROM Makes WHERE Name='Make 3'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes WHERE Name IN ('Make 1', 'Make 2', 'Make 3')");
        }
    }
}
