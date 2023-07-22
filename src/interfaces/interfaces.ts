export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address1: string;
  address2: string;
  suburb: string;
  state: string;
  postCode: string;
  country: string;
}

interface Option {
  value: string;
  label: string;
}

export interface DataItem {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address1: string;
  address2: string;
  suburb: string;
  state: string;
  postCode: string;
  country: string;
  __v: number;
}

export type GetReferralsResponse = DataItem[];

export interface PostReferralsResponse {
  message: string;
  createdReferral: DataItem;
}

export interface HookReturnType {
  data: GetReferralsResponse | PostReferralsResponse | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  postData: (formDataObj: FormData) => Promise<void>;
}

export interface selectorProps {
  label: string;
  options: Option[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export type RootTabParamList = {
  Create: undefined;
  View: undefined;
};
