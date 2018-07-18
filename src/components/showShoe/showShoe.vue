<template>
    <div class="showshoe">
			<div class="showEdit-area" v-if="edit">
				<ul class="side" v-show="currentAngle==='side'">
					<li class="base img-list">
						<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_side.png'">
					</li>
					<li class="logo-list img-list">
					</li>
					<li class="path-list img-list" v-for="(item, index) in part" :key="index">
						<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/side/'+item.material+'.png'">
					</li>
					<li class="nowheel img-list" v-show="nowheel">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/side_nowheel.png'">
					</li>
				</ul>
				<ul class="45" v-show="currentAngle==='45'">
					<li class="base img-list">
						<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_45.png'">
					</li>
					<li class="logo-list img-list">
					</li>
					<li class="path-list img-list" v-for="(item, index) in part" :key="index">
						<img onerror="this.src='../../../static/showShoe/error.png'"   :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/45/'+item.material+'.png'">
					</li>
					<li class="nowheel img-list" v-show="nowheel">
						<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/45_nowheel.png'">
					</li>
				</ul>
				<ul class="front" v-show="currentAngle==='front'">
					<li class="base img-list">
						<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_front.png'">
					</li>
					<li class="logo-list img-list">
					</li>
					<li class="path-list img-list" v-for="(item, index) in part" :key="index">
						<img onerror="this.src='../../../static/showShoe/error.png'"  :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/front/'+item.material+'.png'">
					</li>
					<li class="nowheel img-list" v-show="nowheel">
							<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/front_nowheel.png'">
					</li>
				</ul>
				<div class="stylename">
					<img :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/stylename.png'">
				</div>
				<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(currentAngle==='side'?'btn_side-active':'btn_side')" @click="changAngle('side')"></div>
				<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(currentAngle==='front'?'btn_front-active':'btn_front')" @click="changAngle('front')"></div>
				<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(currentAngle==='45'?'btn_45-active':'btn_45')" @click="changAngle('45')"></div>
				<div :class="(lang==='en-US'?'operate_en_btn ':'operate_zh_btn ')+(preview?'btn_view-active':'btn_view')" @click="preview = !preview"></div>
				<div style="height:53px;" :class="[{'operate_en_btn btn_en_nowheel-active': lang==='en-US'&&nowheel},{'operate_en_btn btn_en_nowheel': lang==='en-US'&&!nowheel},{'operate_zh_btn-active btn_zh_nowheel': lang==='zh-CN'&&nowheel},{'operate_zh_btn btn_zh_nowheel': lang==='zh-CN'&&!nowheel} ]"  @click="onlyShoeBody"></div>
			</div>
			<div class="viewAll-area" v-if="edit" v-show="preview" @click.stop="viewAll($event)">
				<div class="content clrfix" id="view-contain">
					<div class="view-box fl">
						<ul class="front">
							<li class="base img-list">
								<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_front.png'">
							</li>
							<li class="logo-list img-list">
							</li>
							<li class="path-list img-list" v-for="(item, index) in part" :key="index">
								<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/front/'+item.material+'.png'">
							</li>
							<li class="nowheel img-list" v-show="nowheel">
									<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/front_nowheel.png'">
							</li>
						</ul>
					</div>
					<div class="view-box fl">
							<ul class="side">
								<li class="base img-list">
									<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_side.png'">
								</li>
								<li class="logo-list img-list">
								</li>
								<li class="path-list img-list" v-for="(item, index) in part" :key="index">
									<img  onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/side/'+item.material+'.png'">
								</li>
								<li class="nowheel img-list" v-show="nowheel">
										<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/side_nowheel.png'">
								</li>
						</ul>
					</div>
					<div class="view-box fl">
						<ul class="45">
							<li class="base img-list">
								<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_45.png'">
							</li>
							<li class="logo-list img-list">
							</li>
							<li class="path-list img-list" v-for="(item, index) in part" :key="index">
								<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/45/'+item.material+'.png'">
							</li>
							<li class="nowheel img-list" v-show="nowheel">
								<img onerror="this.src='../../../static/showShoe/error.png'" :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/45_nowheel.png'">
							</li>
						</ul>
					</div>
					<div id="close" @click="viewAll($event)"></div>
				</div>
			</div>
    </div>	
</template>

<script>
// const IMG_PATH = '../../../static/'
import { hasDom } from 'common/js/dom'
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
			nowheel: false,
			part: [],
			logo: [],
			glueindex: ''
		}
	},
	created(){
		this.getPathArr(this.shoe)
	},
	methods: {
		getPathArr(shoe){
			let p = []
			let flag = false
			for(let key in shoe){
				if(shoe[key].material !== 0 && shoe[key].material){
					p.push(shoe[key])
				}
			}
			this.part = p
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
			this.nowheel = !this.nowheel
		},
		viewAll(event){
			let e = window.event || event
			let area = document.getElementById("view-contain")
			let close = document.getElementById("close")
			e.stopPropagation()
		  if(area !== e.target && !hasDom(e.target, area) || e.target === close){
				this.preview = !this.preview
			}
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
	},
	watch:{
		curChangeMaterial(newChange) {
			if(this.shoe[this.curChangePart].partType.id !== 1) return
			else this.addPart(newChange)
		},
		shoe(newshoe) {
			if(newshoe === this.shoe) return 
			this.getPathArr(newshoe)
		}
	}
}
</script>


<style lang="less" scoped>
@import url('../../common/less/common.less');
.img-list{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	list-style: none;
}
.img-list>img{
	width: 100%;
  margin-top: 10px;
}
.stylename{
	position: absolute;
  top: 24px;
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
</style>


