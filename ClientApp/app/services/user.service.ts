import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private users: any[] = [
    { id: 1, fullName: 'Kevin Cartner', userName: 'kevin', title: 'Director Sales', noOfJobs: 35, roles: [1] },
    { id: 2, fullName: 'Marty Kimble', userName: 'marty', title: 'Sr. Sales Mgr', noOfJobs: 10, roles: [2] },
    { id: 3, fullName: 'Umesh Kumar', userName: 'umesh', title: 'Sales Mgr', noOfJobs: 20, roles: [2, 3] },
    { id: 4, fullName: 'Girish Anantha', userName: 'girish', title: 'Chief Architect', noOfJobs: 5, roles: [1, 2, 3] },
    { id: 5, fullName: 'Naveen Pete', userName: 'naveen', title: 'Web Developer', noOfJobs: 2, roles: [1, 3] }
  ];
  private states: any[] = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
  ]
  private titles: any[] = [
    { id: 1, name: 'Director Sales' },
    { id: 2, name: 'Sr. Sales Mgr' },
    { id: 3, name: 'Sales Mgr' },
    { id: 4, name: 'Chief Architect' },
    { id: 5, name: 'Web Developer' }
  ];
  private roles: any[] = [
    { id: 1, name: 'System Admin' },
    { id: 2, name: 'Read Access Only' },
    { id: 3, name: 'Read/Write Access' }
  ];
  private userClients: any[] = [
      { company: 'Farmers', contact: 'John Doe', source: 'House Account', email: 'jd@y.z', phone: '818-789-0977', city: 'Los Angeles', state: 'CA' },
      { company: 'State Farm', contact: 'John King', source: 'New', email: 'jk@y.z', phone: '714-333-5633', city: 'San Jose', state: 'CA' },
      { company: 'AAA', contact: 'John Dexter', source: 'New', email: 'jdx@y.z', phone: '456-789-0977', city: 'Irvene', state: 'CA' },
  ];
  private sales: any[] = [
      { company: 'Farmers', contact: 'John Doe', amount: 6885 },
      { company: 'State Farm', contact: 'John King', amount: 2390 },
      { company: 'AAA', contact: 'Marvin', amount: 9763 },
      { company: 'Farmers', contact: 'Aaron', amount: 1700 },
      { company: 'State Farm', contact: 'Mark', amount: 3060 },
  ];
  private houseAccounts: any[] = [
      { company: 'Farmers', contact: 'Aaron', houseAvgJobs: 5, salesMonth1: 5, salesMonth2: 3, salesMonth3: 5, targetJobs: 7, performancePct: .62 },
      { company: 'Farmers', contact: 'Mark', houseAvgJobs: 9, salesMonth1: 12, salesMonth2: 12, salesMonth3: 11, targetJobs: 11, performancePct: 1.06 },
      { company: 'State Farm', contact: 'Dave', houseAvgJobs: 15, salesMonth1: 14, salesMonth2: 15, salesMonth3: 13, targetJobs: 17, performancePct: .82 },
  ];

  constructor() {
  }

  getUsers(queryObj) {
    console.log('UserService.getUsers() invoked.');

    var queryResult = {
      totalItems: this.users.length,
      items: this.users
    };

    return queryResult;
  }

  getStates() {
    console.log('UserService.getStates() invoked.');

    return this.states;
  }

  getTitles() {
    console.log('UserService.getTitles() invoked.');

    return this.titles;
  }

  getRoles() {
    console.log('UserService.getRoles() invoked.');

    return this.roles;
  }

  getUserRoles(userId) {
    console.log('UserService.getUserRoles() invoked.');

    var user = this.users.find(u => u.id === userId);
    return user.roles;
  }

  getUserClients(userId, queryObj) {
    console.log('UserService.getUserClients() invoked.');

    var queryResult = {
      totalItems: this.userClients.length,
      items: this.userClients
    };

    return queryResult;
  }

  getSales(userId, queryObj) {
    console.log('UserService.getSales() invoked.');

    var queryResult = {
      totalItems: this.sales.length,
      items: this.sales
    };

    return queryResult;
  }

  getHouseAccounts(userId, queryObj) {
    console.log('UserService.getHouseAccounts() invoked.');

    var queryResult = {
      totalItems: this.houseAccounts.length,
      items: this.houseAccounts
    };

    return queryResult;
  }
}
