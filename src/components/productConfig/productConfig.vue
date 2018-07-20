<template>
    <div class="produtConfig">
        <h2>
            <i></i>
            {{$t('m.Produce.Title')}}
        </h2>
        <div class="select-row">
            <label class="select-label label1">{{$t('m.Produce.Left_Size')}}</label>
            <select class="select-choices">
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
            <select class="select-choices">
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
            <select class="select-choices">
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
            <select class="select-choices">
                <option value="72mm">72mm</option>
                <option value="76mm">76mm</option>
                <option value="80mm">80mm</option>
                <option value="84mm">84mm</option>
            </select>
        </div>
        <div class="config-list">
            <div class="cloth-part fl"></div>
            <div class="glue-part fl"></div>
        </div>
    </div>
</template>

<script>
export default {
    // computed: {
    //     lang() {
    //         return this.$i18n.locale
    //     }
    // },

}
</script>

<style lang="less" scoped>
@import url('../../common/less/base.less');
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
    padding-bottom: 9999px;
    margin-bottom: -9999px;
    background: #fff;
}
.glue-part{
    overflow: auto;
    margin-left: 376px;
    padding-bottom: 9999px;
    margin-bottom: -9999px;
    background: #fff;
}


</style>
