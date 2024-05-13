const user = require('../models/usermodel');

module.exports = {

    createContact: async (req, res) => {

        console.log('gekhhf')
        const { fullname, officeNo, homeNo, city } = req.body;

        try {
            const contact = new user({
                fullname,
                officeNo,
                homeNo,
                city
            })
            await contact.save();
            return res.status(200).json({
                success: true,
                message: 'data created',
                contact
            })

        } catch (error) {
            console.log(error);
        }
    },

    addContact: async (req, res) => {
        // console.log(req.body)
        try {
            let updateObj1 = {};

            if(req.body.officeNo){
                updateObj1.officeNo  =  req.body.officeNo  

            }
            // console.log('first======',updateObj)
             if(req.body.homeNo){
                updateObj1.homeNo  =  req.body.homeNo  
            }
            if(updateObj1.e){
                return res.status(401).send('Nooo ');
            }
            // console.log('second=======',updateObj)
            // await data.save();
           let gg = await user.updateOne(
                {_id:req.body.updateId}, 
                { $push: updateObj1 }
              )
              console.log("jkjkk :",gg);
            return res.status(200).json({
                success: true,
                message: 'data added',
            
            })
        } catch (error) {
            console.log(error);
        }
    },

    deleteContact: async (req, res) => {
        try {
          
            const deletedata = await user.findByIdAndDelete(req.body.deleteId);
            return res.status(200).send('delete successfully');

        } catch (error) {
            console.log(error);
        }
    },
    updatecontact: async (req, res) => {

        const {officeNo,homeNo,newNo} = req.body
        try {
            let updateobj={};
           const data = await user.findById(req.body.uId);
           console.log(data);
        
           const index = data.officeNo.findIndex(element => element === officeNo)
           console.log(index);
           if(index !== -1){
            data.officeNo[index] = newNo;
           }
           const update = await user.updateOne(
            {_id:req.body.uId},
            {$set :{officeNo: data.officeNo}},{new:true}
           )
           return res.status(200).send('updated successfully');
            
            
        } catch (error) {
            console.log(error);
        }
    },
    removeData: async (req, res) => {

        try {
           let removeobj ={};
           if(req.body.homeNo){
            removeobj = {officeNo : req.body.officeNo}
           }else if(req.body.officeNo){
            removeobj = {officeNo : req.body.officeNo}
           }else{
            return res.status(400).send('please provide any Number')
           }
           console.log('id====',req.body.deleteId);
           const removecon = await user.updateOne(
            {_id:req.body.deleteId},
            {$pull : removeobj}
            );
           console.log('removedata====',removecon);
           return res.status(200).send('delete successfully..')

        } catch (error) {
            console.log(error);
        }
    }



}