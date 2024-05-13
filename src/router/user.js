const express = require('express');
const { createContact, addContact, deleteContact, removeData, updatecontact } = require('../controller/usercontroller');
const router = express();

router.get('/', (req,res) => {
 res.sendFile('index.html')
})
router.post('/',createContact);
router.put('/add-contact',addContact);
router.put('/update',updatecontact);
router.delete('/deleteContact',deleteContact)
router.delete('/',removeData)

module.exports = router;