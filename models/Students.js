/**
 * Created by linhehe on 15/7/30.
 */
var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    //
    Purview: Number, // 权限
    Name: String,
    Sex: String,
    Phone: String,
    Password: String,
    DeviceId: String, // 设备id
    Classes: {type: mongoose.Schema.Types.ObjectId, ref: 'Class'},
    Professions: {type: mongoose.Schema.Types.ObjectId, ref: 'Profession'},
    Colleges: {type: mongoose.Schema.Types.ObjectId, ref: 'College'},

    IsSignIn: Number
});

mongoose.model('Student', StudentSchema);

/*
 * 关于权限：
 * 1. 学校领导
 * 2. 辅导员
 * 3. 班主任
 * 4. 纪委
 * 5. 普通学生
 */