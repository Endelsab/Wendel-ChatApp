import React from 'react'
import SearchUser from '../sideComponents/SearchUser';
import Userlist from '../sideComponents/Userlist';
import Logout from '../sideComponents/Logout';

const SiderBar = () => {
  return (
		<div className=' border border-slate-500 flex flex-col p-4'>
			<SearchUser />
			<div className="divider divider-info mt-10 "></div>
			<Userlist />
			<Userlist />
			
		<Logout/>
		</div>
	);
}

export default SiderBar