const express = require("express");
const app = express();
const port=3000;

const todos=[];
//解析json檔
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('首頁')
});

app.post('/api/todos',(req,res)=>{
    const newTodos={
        id:todos.length+1,
        title: "學習 Express",
    completed: false
    createdAt: "2024-03-20T10:00:00.000Z"
    };
    users.push(newTodos);
    res.status(201).json({//200跟201的差異是201是建立新的資源
        message:'使用者已建立',
        todos:newTodos
    });
});
//PUT
app.put('/api/users/:id',(req,res)=>{
    const userId=Number.parseFloat(req.params.id)//確定parseFloat轉換浮點數的id
    const userIndex=users.findIndex(user=>user.id===userId);
    if(userIndex===-1){
        return res.status(404).json({message:'找不到該使用者'});
    }
    users[userIndex]={
        ...users[userIndex],
        phone:req.body.phone
    };
    res.json({
        message:'使用者已更新',
        user: users[userIndex]
    });
});
//DELETE
app.delete('/api/users/:id',(req,res)=>{
    const userId=Number.parseFloat(req.params.id)
    const userIndex=users.findIndex(user=>user.id===userId);
    if(userIndex===-1){
        return res.status(404).json({message:'找不到該使用者'});
    }

    users.splice(userIndex,1);
    res.json({message:`使用者${userId}已刪除`})
});

app.listen(port,()=>{
    console.log(`伺服器運行在http://localhost:${port}`);
    
})

