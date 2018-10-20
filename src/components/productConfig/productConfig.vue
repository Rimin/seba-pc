<template>
    <div class="produtConfig">
        <h2>
            <i></i>
            {{$t('m.Produce.Title')}}
        </h2>
        <div class="select-row">
            <label class="select-label label1">{{$t('m.Produce.Left_Size')}}</label>
            <select class="select-choices" v-model="leftsize">
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
            </select>
            <label class="select-label label2">{{$t('m.Produce.Right_Size')}}</label>
            <select class="select-choices" v-model="rightsize">
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
            </select>
        </div>
         <div class="select-row">
            <label class="select-label label1">{{$t('m.Produce.Frame_Size')}}</label>
            <select class="select-choices" v-model="framesize">
                <option value="pt219">{{$t('m.Produce.Frame')}} 219mm</option>
                <option value="pt231">{{$t('m.Produce.Frame')}} 231mm</option>
                <option value="pt243">{{$t('m.Produce.Frame')}} 243mm</option>
                <option value="xj219">{{$t('m.Produce.Rockered_Frame')}} 219mm</option>
                <option value="xj227">{{$t('m.Produce.Rockered_Frame')}} 227mm</option>
                <option value="xj231">{{$t('m.Produce.Rockered_Frame')}} 231mm</option>
                <option value="xj239">{{$t('m.Produce.Rockered_Frame')}} 239mm</option>
                <option value="xj243">{{$t('m.Produce.Rockered_Frame')}} 243mm</option>
            </select>
            <label class="select-label label2">{{$t('m.Produce.Wheel_Size')}}</label>
            <select class="select-choices" v-model="wheelsize">
                <option value="72mm">72mm</option>
                <option value="76mm">76mm</option>
                <option value="80mm">80mm</option>
                <option value="84mm">84mm</option>
            </select>
        </div>
        <div class="config-list">
            <div class="cloth-part fl" :style="clothpart.length>gluepart.length?'border-right: 1px solid #b0adad':''">
                <div class="config-item" v-for="item in clothpart" :key="item.id">
                    <label class="select-label label1 fl">{{(lang== 'en-US'?item.enName:item.zhName)+'：' }}</label>
                    <div class="fl configshow" :style="'background:'+item.colorcode +';color:'+(item.colorcode=='#fff'?'#000':'')">{{lang =='en-US'? (item.material==0?'':item.material+'·')+item.enColor:(item.material==0?'':item.textureName+item.material+'号·')+item.zhColor}}</div>
                </div>
            </div>
            <div class="glue-part fl" :style="clothpart.length<gluepart.length?'border-left: 1px solid #b0adad':''">
                <div class="config-item2" v-for="item in gluepart" :key="item.id">
                    <label class="select-label label3 fl">{{(lang== 'en-US'?item.enName:item.zhName)+'：'}}</label>
                    <div class="fl configshow2" :style="'background:'+item.colorcode +';color:'+(item.colorcode=='#fff'?'#000':'')">{{lang =='en-US'? item.enColor:item.zhColor}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getClothById } from '@/config/cloth'
import { getGlueById } from '@/config/glue'
class Part {
    constructor (enName, zhName, material, parttype, detail, nowheel){
        this.enName = enName
        this.zhName = zhName
        this.material = material
       // this.long = long
        if(parttype === 1) {
            this.colorcode = getClothById(material).code
            this.textureName = getClothById(material).texture.name
            this.zhColor = getClothById(material).zhColor
            this.enColor = getClothById(material).enColor
        } else if((detail === 3 || detail === 4 || detail === 6) && nowheel === true ) {
            this.enColor = 'null'
            this.zhColor = '无'
            this.colorcode = '#fff'
        }else{
            this.enColor = getGlueById(material).enColor
            this.zhColor = getGlueById(material).zhColor
            this.colorcode = getGlueById(material).code
        }
       
    }
}
const framesizeConfigEn = {
    'pt219': 'Frame 219mm',
    'pt231': 'Frame 231mm',
    'pt243': 'Frame 243mm',
    'xj219': 'Rockered Frame 219mm',
    'xj227': 'Rockered Frame 227mm',
    'xj231': 'Rockered Frame 227mm',
    'xj239': 'Rockered Frame 239mm',
    'xj243': 'Rockered Frame 243mm'
}
const framesizeConfigZh = {
    'pt219': '普通平架 219mm',
    'pt231': '普通平架 231mm',
    'pt243': '普通平架 243mm',
    'xj219': '香蕉架 219mm',
    'xj227': '香蕉架 227mm',
    'xj231': '香蕉架 227mm',
    'xj239': '香蕉架 239mm',
    'xj243': '香蕉架 243mm'
}
class skateSize {
    constructor(ls, rs, fs, ws){
        this.leftSize = ls
        this.rightSize = rs
        this.frameOption = {
            size_en: framesizeConfigEn[fs], // 还要改，中英文参数 ??
            size_zh: framesizeConfigZh[fs],
            color_en: '',
            color_zh: ''
        }
        this.wheelOption = {
            size_en: ws,
            size_zh: ws,
            color_en: '',
            color_zh: ''
        }
    }
}
export default {
    data() {
        return{
            clothpart: [],
            gluepart: [],
            leftsize: 32,
            rightsize: 32,
            framesize: 'pt219',
            wheelsize: '72mm'
        }
    },
    mounted(){
       this.getConfigList(this.shoe)
       this.$bus.skateInformation = new skateSize(32, 32, 'pt219', '72mm')
       // console.log(this.skateInformation)
    },
    computed: {
        shoe() {
            return this.$bus.shoe
        },
        lang(){
            return this.$i18n.locale
        },
        nowheel() {
            return this.$bus.nowheel
        }
    },
    watch: {
        leftsize (newinfo) {
            // console.log(newinfo)
            this.$bus.skateInformation.leftSize = newinfo
        },
        rightsize (newinfo) {
            // console.log(newinfo)
             this.$bus.skateInformation.rightSize = newinfo
        },
        framesize(newinfo) {
            // console.log(newinfo)
            this.$bus.skateInformation.frameOption.size_en = framesizeConfigEn[newinfo]
            this.$bus.skateInformation.frameOption.size_zh = framesizeConfigZh[newinfo]
        },
        wheelsize(newinfo) {
            // console.log(newinfo)
            this.$bus.skateInformation.wheelOption.size_en = newinfo
            this.$bus.skateInformation.wheelOption.size_zh = newinfo
        }
    },
    methods:{
        getConfigList(shoe) {
            for(let key in shoe) {  
                if(shoe[key].partType && shoe[key].partType.type === 1) {
                    this.clothpart.push(new Part(
                        shoe[key].enName,
                        shoe[key].zhName,
                        shoe[key].material,
                        shoe[key].partType.type,
                        shoe[key].partType.detail,
                        this.nowheel

                    ))
                } else if(shoe[key].partType && shoe[key].partType.type !== 1) {
                    this.gluepart.push(new Part(
                        shoe[key].enName,
                        shoe[key].zhName,
                        shoe[key].material,
                        shoe[key].partType.type,
                        shoe[key].partType.detail,
                        this.nowheel
                    )) 
                }
            }
            // console.log(this.clothpart)
        },
        _getClothById (id) {
            return getClothById(id)
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../common/less/variable.less');
@staticimg: '../../../static';
.produtConfig > h2{
    margin-left: 72px;
    margin-top: 0;
    font-size: 16px;
    font-weight: 100;
}
.produtConfig h2 > i{
    height: 15px;
    width: 9px;
    margin-right: 12px;
    margin-top: 30px;
    display: inline-block;
    background:  url("@{staticimg}/personalInf/title_icon.png") no-repeat;
}
.select-row{
    line-height: 24px;
    overflow: hidden;
    margin-top: 5px;
}
.select-label{
    display: inline-block;
    text-align: right;
}
.label1{
    width: 175px;
} 
.label2{
    width: 145px;
} 
.select-choices{
    display: inline-block;
    width: 150px;
    padding: 0;
    border-radius: 0;
    background: #eee;
    height: 22px;
    border: #c7c7c7 solid 1px;
}
.config-list{
    line-height: 24px;
    overflow: hidden;
    margin-top: 5px;
}
.cloth-part{
    width: 375px;
   
}
.glue-part{
    overflow: auto;
}
.config-item{
    line-height: 24px;
    overflow: hidden;
    padding-top: 5px;
   // border-right: 1px solid #d2d3d3;
}
.configshow{
    font-size: 14px;
    text-align: center;
    border: #ccc solid 1px;
    border-radius: 50px;
    height: 22px;
    font-size: 12px;
    line-height: 20px; 
    width: 150px;
    margin-left: 5px;
    color: #ffffff;
}
.label3{
    width: 184px;
    font-size: 14px; 
}
.config-item2{
    line-height: 24px;
    overflow: hidden;
    padding-top: 5px;
   // border-left: 1px solid #d2d3d3;
}
.configshow2{
    font-size: 14px;
    text-align: center;
    border: #ccc solid 1px;
    border-radius: 50px;
    height: 22px;
    font-size: 12px;
    line-height: 20px; 
    width: 60px;
    margin-left: 5px;
    color: #ffffff;
}
</style>
