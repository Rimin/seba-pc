<template>
    <div class="showshoe">
		<div class="showEdit-area" v-if="edit">
			<ul class="side" v-show="currentAngle==='side'">
				<li class="base img-list">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_side.png'">
				</li>
				<li class="part-list img-list" v-for="item in part" :key="item.id">
					<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/side/'+item.material+'.png'">
				</li>
				<li class="nowheel img-list" v-if="nowheel">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/side_nowheel.png'">
				</li>
				<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/side/'+item.id+'.png'">
				</li>
				<li class="customised-logo" v-for="(item, index) in customlogo['side'] " :key="item?'cutom'+index:'no1'">
					<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
				</li>
			</ul>
			<ul class="_45" v-show="currentAngle==='45'">
				<li class="base img-list">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_45.png'">
				</li>
				<li class="part-list img-list" v-for="item in part" :key="item.id">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/45/'+item.material+'.png'">
				</li>
				<li class="nowheel img-list" v-if="nowheel">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/45_nowheel.png'">
				</li>
				<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
					<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/45/'+item.id+'.png'">
				</li>
				<li class="customised-logo" v-for="(item,index) in customlogo['45'] " :key="item?'cutom'+index:'no2'">
					<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
				</li>
			</ul>
			<ul class="front" v-show="currentAngle==='front'">
				<li class="base img-list">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_front.png'">
				</li>
				<li class="part-list img-list" v-for="item in part" :key="item.id">
					<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/front/'+item.material+'.png'">
				</li>
				<li class="nowheel img-list" v-if="nowheel">
					<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/front_nowheel.png'">
				</li>
				<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
					<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/front/'+item.id+'.png'">
				</li>
				<li class="customised-logo" v-for="(item, index) in customlogo['front'] " :key="item?'cutom'+index:'no3'">
					<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
				</li>
			</ul>
			<div class="stylename">
				<img :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/stylename.png'">
			</div>
			<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(currentAngle==='side'?'btn_side-active':'btn_side')" @click="changAngle('side')"></div>
			<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(currentAngle==='front'?'btn_front-active':'btn_front')" @click="changAngle('front')"></div>
			<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(currentAngle==='45'?'btn_45-active':'btn_45')" @click="changAngle('45')"></div>
			<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(preview?'btn_view-active':'btn_view')" @click="preview = !preview"></div>
			<div style="height:53px;" :class="[{'operate_en_btn btn_en_nowheel-active': lang==='en-US'&&nowheel},{'operate_en_btn btn_en_nowheel': lang==='en-US'&&!nowheel},{'operate_zh_btn btn_zh_nowheel-active': lang==='zh-CN'&&nowheel},{'operate_zh_btn btn_zh_nowheel': lang==='zh-CN'&&!nowheel} ]"  @click="onlyShoeBody"></div>
		</div>
		<div class="viewAll-area" v-if="edit" v-show="preview" @click="closeView">
			<div class="content clrfix" id="view-contain" @click.stop>
				<div class="view-box fl">
					<ul class="front">
						<li class="base img-list">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_front.png'">
						</li>
						<li class="part-list img-list" v-for="item in part" :key="item.id">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/front/'+item.material+'.png'">
						</li>
						<li class="nowheel img-list" v-if="nowheel">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/front_nowheel.png'">
						</li>
						<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
							<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/front/'+item.id+'.png'">
						</li>
						<li class="customised-logo" v-for="(item, index) in customlogo['front'] " :key="item?'cutom'+index:'no3'">
							<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+'_pre '+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
						</li>
					</ul>
				</div>
				<div class="view-box fl">
					<ul class="side">
						<li class="base img-list">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_side.png'">
						</li>
						<li class="part-list img-list" v-for="item in part" :key="item.id">
							<img  onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/side/'+item.material+'.png'">
						</li>
						<li class="nowheel img-list" v-if="nowheel">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/side_nowheel.png'">
						</li>
						<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/side/'+item.id+'.png'">
						</li>
						<li class="customised-logo" v-for="(item, index) in customlogo['side'] " :key="item?'cutom'+index:'no1'">
							<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+'_pre '+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
						</li>
					</ul>
				</div>
				<div class="view-box fl">
					<ul class="_45">
						<li class="base img-list">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_45.png'">
						</li>
						<li class="part-list img-list" v-for="item in part" :key="item.id">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/45/'+item.material+'.png'">
						</li>
						<li class="nowheel img-list" v-if="nowheel">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/45_nowheel.png'">
						</li>
						<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
							<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/45/'+item.id+'.png'">
						</li>
						<li class="customised-logo" v-for="(item,index) in customlogo['45'] " :key="item?'cutom'+index:'no2'">
							<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+'_pre '+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
						</li>
					</ul>
				</div>
				<div id="close" @click="closeView"></div>
			</div>
		</div>
		<div class="orderView-area" v-if="!edit">
			<img src="../../../static/showShoe/order_shadow_45.png" class="shawdow45">
			<img src="../../../static/showShoe/order_shadow_front.png" class="shawdowfront">
			<img src="../../../static/showShoe/order_shadow_side.png" class="shawdowside">
			<div class="stylename-order">
				<img :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/stylename.png'">
			</div>
			<div class="order-shower-side fl">
				<ul class="side">
					<li class="base img-list">
						<img class="imgside" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_side.png'">
					</li>
					<li class="part-list img-list" v-for="item in part" :key="item.id">
						<img class="imgside" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/side/'+item.material+'.png'">
					</li>
					<li class="nowheel img-list" v-if="nowheel">
						<img class="imgside" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/side_nowheel.png'">
					</li>
					<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
						<img class="imgside" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/side/'+item.id+'.png'">
					</li>
					<li class="customised-logo" v-for="(item, index) in customlogo['side'] " :key="item?'cutom'+index:'no1'">
						<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+'_preo '+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
					</li>
				</ul>
			</div>
			<div class="order-shower-front fl">
				<ul class="front order-shower">
					<li class="base img-list">
						<img  class="imgfront" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_front.png'">
					</li>
					<li class="part-list img-list" v-for="item in part" :key="item.id">
						<img class="imgfront" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/front/'+item.material+'.png'">
					</li>
					<li class="nowheel img-list" v-if="nowheel">
						<img class="imgfront" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/front_nowheel.png'">
					</li>
					<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
						<img class="imgfront" onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/front/'+item.id+'.png'">
					</li>
					<li class="customised-logo" v-for="(item, index) in customlogo['front'] " :key="item?'cutom'+index:'no3'">
						<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+'_preo '+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
					</li>
				</ul>
			</div>
			<div class="order-shower-45 fl">
				<ul class="_45 order-shower">
					<li class="base img-list">
						<img class="img45" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_45.png'">
					</li>
					<li class="part-list img-list" v-for="item in part" :key="item.id">
						<img class="img45" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/45/'+item.material+'.png'">
					</li>
					<li class="nowheel img-list" v-if="nowheel">
						<img class="img45" onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/45_nowheel.png'">
					</li>
					<li class="logo-list img-list" v-for="(item,index) in logo" :key="index" v-if="showLogo(item.confict, item.confictAngle)">
						<img class="img45" onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/logo/45/'+item.id+'.png'">
					</li>
					<li class="customised-logo" v-for="(item,index) in customlogo['45'] " :key="item?'cutom'+index:'no2'">
						<div :class="'custom-logo custom-logo_'+item.shoeStyle.id+'_'+item.partId+'_preo '+' text-'+item.fontFamily+' color_'+item.fontColor">{{item.content}}</div>
					</li>
				</ul>
			</div>
		</div>
    </div>	
</template>

<script>
import { getLogoByShoeId } from '@/config/logo'
import { getFontColorById } from '@/config/embroidery'  
export default {
props: {
	edit: {
		type: Boolean,
		default: true 
	}
},
data() {
	return {
		IMG_PATH : '../../../static/',
		currentAngle: 'side', // '45','side'
		preview: false,
		part: [],
		logo: [],
		customlogo: {
			'front': [],
			'45': [],
			'side': []
		},
		updataFlag: false
	}
},
// created(){
// 	this.initShoeShow(this.shoe)
// },
mounted() {
	this.initShoeShow(this.shoe)
	setTimeout(() => {
		console.log(this.customLogo)
		this.getCustomLogo(this.customLogo)
    }, 300)
},
methods: {
	initShoeShow(shoe){
		let p = []
		let flag = false
		for(let key in shoe){
			if(shoe[key].material !== 0 && shoe[key].material){
				p.push(shoe[key])
			}
		}
		this.part = p
		this.logo = getLogoByShoeId(shoe.shoeStyle.id)
	},
	addPart(id){
		let p = this.curChangePart
		let flag = false
		for(let i=0;i<this.part.length;i++){
			if(this.part[i].id === p) {
				return
			}
		}
		this.part.push(this.shoe[p])
	},
	changAngle(angle){
		if(angle === this.currentAngle) return
		else {
			this.currentAngle = angle
		}
	},
	onlyShoeBody(){
		this.$bus.nowheel = !this.nowheel
	},
	closeView(){
		this.preview = false
	},
	getCustomLogo(cl){
		this.customlogo['front'] = []
		this.customlogo['45'] = []
		this.customlogo['side'] = []
		for(let i=0; i < cl.length; i++){
			switch (cl[i].angle) {
				case 'side':
					this.customlogo['side'].push(cl[i])
					break;
				case 'front':
					this.customlogo['front'].push(cl[i])
					break;
				case '45':
					this.customlogo['45'].push(cl[i])
					break;
				default: break;
			}
		}
		console.log('是否mouted太快延时不够？：')
		console.log(this.customlogo)
	},
	showLogo(part, angle){
		if(part === '') return true
		for(let i = 0; i < this.customlogo[angle].length; i++){
			if(this.customlogo[angle][i].partId === part && (this.customlogo[angle][i].content || this.customlogo[angle][i].imgBase64)) {
				return false
			}
		}
		return true
	}
},
computed: {
		shoe() {
			return this.$bus.shoe
		},
		lang() {
			return this.$i18n.locale
		},
		curChangeMaterial () {
			return this.$bus.material
		},
		curChangePart () {
			return this.$bus.curSelectPart
		},
		customAngle() {
			return this.$bus.angle
		},
		customLogo(){
			return this.$bus.shoe.embroidery
		},
		hasChange(){
			return this.$bus.hasChange
		},
		nowheel(){
			return this.$bus.nowheel
		}
	},
	watch:{
		curChangeMaterial(newChange) {
			if(this.shoe[this.curChangePart].partType.id !== 1) return
			else this.addPart(newChange)
		},
		shoe(newshoe) {
			this.initShoeShow(newshoe)
			setTimeout(() => {
				console.log(this.customLogo)
				this.getCustomLogo(this.customLogo)
			},300)
		},
		customLogo(newCustomLogo){
			console.log('hahah')
			console.log(this.updataFlag)
			if(this.updataFlag === false) {
				this.getCustomLogo(this.customLogo)
				this.updataFlag = true
			} else return
			// console.log(newCustomLogo)
		},
		hasChange(newChange){
			console.log(newChange)
			console.log('是否相等')
			console.log(this.customAngle === this.currentAngle)
			setTimeout(() => {
				console.log('wait:equal?')
				console.log(this.customAngle === this.currentAngle)
				if(this.customAngle === this.currentAngle) return 
				else {
					this.currentAngle = this.customAngle	
				}
			}, 10)
		}
	}
}
</script>


<style lang="less" scoped>
@import url('../../common/less/common.less');
.showshoe, .showEdit-area{
	position: relative;
	width: 100%;
	height: 100%;
}
.side, .front, ._45{
	margin-top: 10px;
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;
}
.img-list{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	list-style: none;
}
.img-list>img{
	width: 100%;
	height: auto;
}
.customised-logo{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	list-style: none;
}
.stylename{
	position: absolute;
	top: 10px;
	left: 21px;
}
.operate_zh_btn{
	position: absolute;
	right: 19px;
	width: 40px;
	height: 40px;
	background: url("@{staticimg}/showShoe/btn_zh.png") no-repeat;
	cursor: pointer;
}
.operate_en_btn{
	position: absolute;
	right: 19px;
	width: 40px;
	height: 40px;
	background: url("@{staticimg}/showShoe/btn_en.png") no-repeat;
	cursor: pointer;
}
.btn_side{ 
	top: 21px;
	background-position: -204px 0; 
}
.btn_side:hover{
	background-position: -204px -42px; 
}
.btn_side-active{
	top: 21px;
	background-position: -204px -42px; 
}
.btn_front{ 
	top: 66px;
	background-position: -190px -84px;
}
.btn_front:hover{
	background-position: -190px -126px;
}
.btn_front-active{
	top: 66px;
	background-position: -190px -126px;
}
.btn_45{ 
	top: 111px;
  background-position: -162px 0;
}
.btn_45:hover{
	background-position: -162px -42px;
}
.btn_45-active{
	top: 111px;
	background-position: -162px -42px;
}
.btn_view{
	top: 171px;
	background-position: -246px 0;
}
.btn_view:hover{
	top: 171px;
	background-position: -246px -42px;
}
.btn_view-active{
	top: 171px;
	background-position: -246px -42px;
}
.btn_zh_nowheel{
	top: 216px;
	background-position: -64px -98px;
}
.btn_zh_nowheel:hover{
	background-position: -106px -98px;
}
.btn_zh_nowheel-active{
	top: 216px;
	background-position: -106px -98px;
}
.btn_en_nowheel{
	width: 55px;
	padding: 0 10px;
	right: 11px;
	top: 216px;
	background-position: -40px -98px;
}
.btn_en_nowheel:hover{
	right: 11px;
	width: 55px;
	padding: 0 10px;
	background-position: -93px -98px;
}
.btn_en_nowheel-active{
	width: 55px;
	padding: 0 10px;
	right: 11px;
	top: 216px;
	background-position: -93px -98px;
}
.viewAll-area{
	position: fixed;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.5);
	z-index: 100;
	top: 0;
	left: 0;
}
#view-contain{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -180px;
	margin-left: -540px;
	background: #fff;
	height: 360px;
}
.view-box{
	position: relative;
	border-right: #ccc solid 1px;
	width: 360px;
	height: 360px;
}
#close{
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	background: url("@{staticimg}/showShoe/close.png") no-repeat;
}
.custom-logo{
	position: absolute;
    color: #fff;
    text-align: center;
}
/**操作时*/
.custom-logo_1_c{
	top: 52%;
    left: 43%;
    width: 18%;
    font-size: 19px;
    line-height: 30px;
    -webkit-transform: rotate(16deg);
    -ms-transform: rotate(16deg);
    transform: rotate(16deg);
}
.custom-logo_2_a{
	top: 18%;
    left: 16%;
    width: 18%;
    font-size: 19px;
}
.custom-logo_2_f{
	top: 53%;
    left: 40%;
    width: 17%;
    font-size: 20px;
    line-height: 30px;
    -webkit-transform: rotateZ(5deg);
    transform: rotateZ(5deg);
}
.custom-logo_2_h{
	top: 52%;
    left: 42%;
    width: 16%;
    font-size: 23px;
}
/**操作预览时*/
.custom-logo_1_c_pre{
	top: 46%;
    left: 43%;
    width: 18%;
    font-size: 12px;
    line-height: 30px;
    -webkit-transform: rotate(16deg);
    -ms-transform: rotate(16deg);
    transform: rotate(16deg);
}
.custom-logo_2_a_pre{
	top: 18%;
    left: 16%;
    width: 18%;
    font-size: 12px;
}
.custom-logo_2_f_pre{
	top: 47%;
    left: 40%;
    width: 17%;
    font-size: 12px;
    line-height: 30px;
    -webkit-transform: rotateZ(5deg);
    transform: rotateZ(5deg);
}
.custom-logo_2_h_pre{
	top: 48%;
    left: 42%;
    width: 16%;
    font-size: 12px;
}
/**订单预览时*/
.custom-logo_1_c_preo{
	top: 53%;
    left: 43%;
    width: 18%;
    font-size: 12px;
    line-height: 30px;
    -webkit-transform: rotate(16deg);
    -ms-transform: rotate(16deg);
    transform: rotate(16deg);
}
.custom-logo_2_a_preo{
	top: 18%;
    left: 16%;
    width: 18%;
    font-size: 14px;
}
.custom-logo_2_f_preo{
	top: 53.5%;
    left: 40%;
    width: 17%;
    font-size: 12px;
    line-height: 30px;
    -webkit-transform: rotateZ(5deg);
    transform: rotateZ(5deg);
}
.custom-logo_2_h_preo{
	top: 52%;
    left: 42%;
    width: 16%;
    font-size: 14px;
}

.color_1{ color: #000; }
.color_2{ color: #54565b;}
.color_3{ color: #fff;}
.color_4{ color: #d0343a;}
.color_5{ color: #ff4814;}
.color_6{ color: #fde300;}
.color_7{ color: #6bc04b;}
.color_8{ color: #0056b8;}
.color_9{ color: #7b2682;}
.color_10{ color: #e60895;}

.shawdow45{
	position:absolute;
	top: 662px;
    left: 180px;
}
.shawdowfront{
	position:absolute;
	top: 702px;
    left: 46px;
}
.shawdowside{
	position:absolute;
	top: 372px;
    left: 20px;
}
.order-shower-side{
	position: relative;
	width: 100%;
    height: 410px;
}
.stylename-order{
	position: absolute;
	top: 8px;
	right: 43px;
}
.stylename-order > img{
	width: 80px;
	height: 30px;
}
.order-shower-front{
	width: 150px;
    height: 316px;
    position: relative;
    overflow: hidden;
}
.order-shower{
	position: absolute;
    height: 100%;
    width: 359px;
    left: 50%;
    margin-left: -180px;
    margin-top: -6px;
}
.order-shower-45{
	width: 272px;
    height: 316px;
    position: relative;
    overflow: hidden;
}
</style>


