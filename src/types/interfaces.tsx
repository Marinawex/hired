export interface ICompany {
  _id: string;
  name: string;
  applicationDate: string;
  status: {
    inProcess: boolean;
    applied: boolean;
    followUp: boolean;
    noReply: boolean;
    rejected: boolean;
  };
}

export interface ICompanies{
    companies: ICompany[]
}

export interface ICompaniesData {
    data: ICompanies
    results: number
    status:string
}
