<template>
    <div class="showshoe">
			<ul v-if="edit" class="side" v-show="currentAngle==='side'">
				<li class="base">
					<img :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+shoe.shoeStyle.id+'_side.png'">
				</li>
				<li class="logo-list">
				</li>
				<li class="path-list" v-for="(item, index) in part" :key="index">
					<img :src="IMG_PATH+'shoe_'+shoe.shoeStyle.id+'/'+item.id+'/'+item.material">
				</li>
			</ul>
    </div>
</template>

<script>
// const IMG_PATH = '../../../static/';
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
			logo: []
		}
	},
	methods: {
		getPathArr(shoe){
			let p = []
			for(let key in shoe){
				if(shoe[key].material !== 0){
						p.push(shoe[key])
				}
			
			}
			this.part = p
			console.log(this.part)
		}
	},
	computed: {
		shoe() {
      return this.$bus.shoe
		},
		lang() {
			return this.$i18n.locale
		}
	},
	watch:{
		shoe(newShoe) {
			this.getPathArr()
		}
	}
}
</script>


<style lang="less" scoped>
@import url('../../common/less/base.less');
.showshoe{
 
}
</style>


