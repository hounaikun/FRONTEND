export let a = 5 //第一种
let b =10
let f = () =>{
    console.log(b);
}
export {b,f} //第二种  ，export b 会报错，这种必须放在对象中;

export default { //第三种，默认暴露；前两种暴露会将自身（第一种）或自身的属性（第二种）全部放到Module对象中，但是默认暴露会将default对象作为属性放到Module对象中，
    school:'smxy',
    fun(){
        console.log(this.school);
    }
}
