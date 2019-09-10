import axios from 'axios'

export const gethomedata= () =>{
	return axios.get('api/index.json').then(res=>{
		const data=res.data
		if(res.data==data){
			return res.data.data
		}
			
		throw new Error('没有成功获取到数据！');
	}).catch(err=>{
		if(err){
			console.log(err)
		}
	}).then(res => {
    return new Promise(resolve => {
        resolve(res);
    });
  });
}