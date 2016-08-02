var data = [
	{
		id: new Date().getTime() + Math.random(),
		title:"document.getElementById",
		isChecked:false  //给这条数据加上一个字段，来表示这条数据是否被选中
	},
	{
		id: new Date().getTime() + Math.random(),
		title:"document.getElementsByClass",
		isChecked:false
	}
	
]

var app={
	addItem:function (title){
		data.push({
			id:new Date().getTime() + Math.random(),
			title:title,
			isChecked:false
		})
		app.render();
	},
	changeItem:function (id){
		data.forEach(function(item){
			if(item.id == id){
				item.isChecked = !item.isChecked;
			}
		});
		app.render()
	},
	changeAll:function(bl){
		data.forEach(function(item){
			item.isChecked = bl;
		})
		app.render()
	},
	delectItem:function(id){
		data = data.filter(function(item){
			return item.id != id
		})
		app.render();
	}
}