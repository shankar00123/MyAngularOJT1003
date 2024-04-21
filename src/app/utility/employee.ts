export interface Employee{
     eid : number;
	 name :string;
     status :string;
	 department :string;
	 createdBy :string;
	 createdDate : Date;
	 updatedBy :string;
	 updatedDate :Date;
	 emailId :string;
	 mobileNo :string;
	 country:{
        "cid":number,
        "cname":string
    };

    
    
}