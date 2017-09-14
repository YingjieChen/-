$(function () {
	var ContentBox = React.createClass({
		displayName: 'ContentBox',

		getInitialState: function () {
			return {};
		},
		componentDidMount: function () {
			$.ajax({
				url: "/oskfhy/kuaidi/controller/kuaiditype.php",
				success: function (data) {
					var kuaiditype = JSON.parse(data);
					this.setState({ kuaiditype: kuaiditype });
				}.bind(this)
			});
		},
		checkthepostid: function (invalue) {
			var reg = /^[0-9]*$/;
			return reg.test(invalue);
		},
		postchange_keyup: function () {
			var postid = this.refs['postid'].value;
			//检测是否全部数字			
			if (!this.checkthepostid(postid)) {
				var s = postid.replace(/[^0-9]*/ig, '');
				this.refs['postid'].value = s;
				return false;
			}
		},
		doSearch: function () {
			var postid = this.refs['postid'].value;
			var type = this.refs['type'].value;
			//检测是否全部数字
			if (!this.checkthepostid(postid)) {
				alert("你输入的数字不符合要求");
				return false;
			}
			$.ajax({
				url: "/oskfhy/kuaidi/controller/index.php",
				data: { type: type, postid: postid },
				success: function (resultdata) {
					var resultdataobj = JSON.parse(resultdata);
					console.log(resultdataobj);
				}.bind(this)
			});
		},
		render: function () {
			return React.createElement(
				'div',
				{ className: 'wrapper' },
				React.createElement(
					'div',
					{ className: 'wrapper-cointer' },
					React.createElement(
						'form',
						{ className: 'mainform' },
						React.createElement(
							'select',
							{ ref: 'type' },
							React.createElement(
								'option',
								null,
								'\u8BF7\u9009\u62E9'
							),
							this.state.kuaiditype ? this.state.kuaiditype.map(function (item, index) {
								return React.createElement(
									'option',
									{ value: item.key },
									item.name
								);
							}) : ""
						),
						React.createElement('input', { type: 'text', ref: 'postid', onChange: this.postchange_keyup.bind(this), onKeyUp: this.postchange_keyup.bind(this) }),
						React.createElement(
							'a',
							{ className: 'search', onClick: this.doSearch.bind(this) },
							'SEARCH'
						)
					)
				)
			);
		}
	});

	ReactDOM.render(React.createElement(ContentBox, null), document.body);
});
