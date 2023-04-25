export interface IContactInfo {
  ContactName: string;
  ContactEmail: string;
  ContactPhoneNumber: string; // Todo : check how to valueAsNumber works
}

export interface ICompany {
  _id: string;
  companyName: string;
  position: string;
  applicationDate: string;
  status: {
    inProcess: boolean;
    applied: boolean;
    followUp: boolean;
    noReply: boolean;
    rejected: boolean;
  };
  contactInfo: IContactInfo;
}

export interface ICompanies {
  companies: ICompany[];
}

export interface ICompaniesData {
  data: ICompanies;
  results: number;
  status: string;
}
