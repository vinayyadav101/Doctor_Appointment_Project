import mongoose, { Schema } from "mongoose";
import appError from "../utils/error.util.js";


const doctorSchema = new Schema(
    {
        doctorName:{
            type:"string",
            required:true,
            minlength : 3,
            maxlength : 20,
            trime : true
        },
        email:{
            type:"string",
            required:true,
            unique:true,
            lowercase : true,
            trime: true
        },
        gender:{
            type:"string",
            emum:["Male","Female","Other"],
            required:true,
            trime: true
        },
        address:{
            type:"string",
            required:true,
            trime:true
        },
        specialty:{
            type:"string",
            required:true,
            lowercase : true,
            trime: true
        },
        qualifications:{
            type:"string",
            required:true,
            lowercase : true,
            trime: true
        },
        experience:{
            type:"Number",
            required:true
        },
        consultaionFee:{
            type:'Number',
            required:true
        },
        role:{
            type:'string',
            default : 'doctor'
        },
        avatar:{
            url_link:{
                type:"string"
            },
            avatar_id:{
                type:"string"
            }
        },
        review:{
            type:[
                {
                    patientEmail:{
                        type:"string",
                        lowercase : true,
                        trime: true
                    },
                    rating:{
                        type:"Number"
                    },
                    review:{
                        type:"string",
                        maxlength : 200,
                        trime: true
                    }
                }
            ],
            select:false
        },
    },
    {
        timestamps:true
    }
)

doctorSchema.pre('save', function(next){
    if (!this.doctorName.includes('Dr')) {
        this.doctorName = `Dr ${this.doctorName}`
        return next()
    }

    return next()
})

const doctorModel = mongoose.model('doctors' , doctorSchema);

export default doctorModel

