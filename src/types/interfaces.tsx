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
  daysPassedSinceApplication:number ;
}

export interface ICompanies {
  companies: ICompany[];
}


export interface ICompaniesData {
  data: ICompanies;
  results: number;
  status: string;
}

export interface Positions {
  positions : Position[];
}


export interface positionsData {
  data: Positions;
  results: number;
  status: string;
}





export interface Company {
  name: string;
  description?: string;
  website?: string;
  location?: string;
}

export type ApplicationStatus = 'inProcess' | 'applied' | 'followUp' | 'noReply' | 'rejected';

export interface ContactInfo {
  name?: string;
  email?: string;
  phoneNumber?: string; // Todo: Check how valueAsNumber works.
}

export interface Position {
  title: string;
  requirements?: string;
  company: Company;
  applicationDate: string; // Format: YYYY-MM-DD
  status: ApplicationStatus;
  contact?: ContactInfo;
}
