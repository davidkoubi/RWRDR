module.exports = (req,res)=>{

    if(req.session.userId){
        return res.render('newProject')
    } 
        res.redirect('/auth/login')
    
}