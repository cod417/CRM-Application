module.exports = {
    userTypes:{
        customer:"CUSTOMER",
        admin:"ADMIN",
        enginner:"ENGINEER"
    },
    userStatus:{
        pending:"PENDING",
        approved:"APPROVED",
        rejected:"REJECTED"
    }   
};

// IF(!USERTYPE){
//      userStatus==approved
//      IF(!uSERTYPE||USERTYPE=="cUSTOMER"){
//          this.userStatus:"APPROVE"
//      }
//      else{
//          this.userStatus:"REJECT"
//      }
// }

// USESTATUS = APPROVED||PENDING||REJECTED
// USETYPE:CUSTOMER USESTATUS:  "Approv
// usertype=cuystomer userstatus== aprroved
// usertpye :enginner userStatus :PENDING