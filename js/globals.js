var hints = ['all you need is love','this will take forever','no one is alone','be haphephobic','computers calculating 8 + 2','best game ever'];

var finish =
	[
		
		[//heart level begin
		   [
			 {
			   typ: "ne",
			   orientation: 1
			 },
			 {
			   typ: "nes",
			   orientation: 1
			 },
			 {
			   typ: "ne",
			   orientation: 2
			 },
		   ],
		   [
			 {
			   typ: "ne",
			   orientation: 0
			 },
			 {
			   typ: "nes",
			   orientation: 1
			 },
			 {
			   typ: "ne",
			   orientation: 3
			 }
		   ]
		],//heart level end
		[ //infinity level begin
		   [
			 {
			   typ: "ne",
			   orientation: 1
			 },
			 {
			   typ: "nes",
			   orientation: 1
			 },
			 {
			   typ: "ne",
			   orientation: 2
			 },
		   ],
		   [
			 {
			   typ: "ne",
			   orientation: 0
			 },
			 {
			   typ: "nes",
			   orientation: 3
			 },
			 {
			   typ: "ne",
			   orientation: 3
			 }
		   ]
		], //infinity level end
		[	//connect everything level begin
		  [
			{
			  typ: "ne",
			  orientation: 1
			},
			{
			  typ: "ns",
			  orientation: 1
			},
			{
			  typ: "ns",
			  orientation: 1
			},
			{
			  typ: "ne",
			  orientation: 2
			},
		  ],
		  [
			{
			  typ: "ne",
			  orientation: 0
			},
			{
			  typ: "ne",
			  orientation: 2
			},
			{
			  typ: "ne",
			  orientation: 1
			},
			{
			  typ: "ne",
			  orientation: 3
			},
		  ],
		  [
			{
			  typ: "n",
			  orientation: 2
			},
			{
			  typ: "n",
			  orientation: 0
			},
			{
			  typ: "n",
			  orientation: 0
			},
			{
			  typ: "n",
			  orientation: 2
			},
		  ],
		  [
			{
			  typ: "n",
			  orientation: 0
			},
			{
			  typ: "n",
			  orientation: 1
			},
			{
			  typ: "n",
			  orientation: 3
			},
			{
			  typ: "n",
			  orientation: 0
			}
		  ]
		], //connect everything level end
		
		[ //do not touch level begin
			[
				{
					typ:"ns",
					orientation:1
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:1
				}
			],
			[
				{
					typ:"ne",
					orientation:3
				},
				{
					typ:"ns",
					orientation:1
				},
				{
					typ:"ne",
					orientation:0
				}
			],
			[
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"nesw",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				}
			],
			[
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"ns",
					orientation:1
				},
				{
					typ:"ne",
					orientation:1
				}
			],
			[
				{
					typ:"ns",
					orientation:1
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:1
				}
			]
		], //do not touch level end
		//10 level begin
		[
			[
			 {
			   typ: "ns",
			   orientation: 0
			 },
			 {
			   typ: "ne",
			   orientation: 1
			 },
			 {
			   typ: "ne",
			   orientation: 2
			 },
			 {
			   typ: "ns",
			   orientation: 0
			 },
			 {
			   typ: "ne",
			   orientation: 1
			 },
			 {
			   typ: "ne",
			   orientation: 2
			 }
		   ],
		   [
			 {
			   typ: "ns",
			   orientation: 0
			 },
			 {
			   typ: "ne",
			   orientation: 0
			 },
			 {
			   typ: "ne",
			   orientation: 3
			 },
			 {
			   typ: "ns",
			   orientation: 0
			 },
			 {
			   typ: "ne",
			   orientation: 0
			 },
			 {
			   typ: "ne",
			   orientation: 3
			 }
		   ]
		
		], //10 level end	
		[
			[
				{
					typ:"ne",
					orientation:1
				},
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"n",
					orientation:2
				},
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"n",
					orientation:2
				},
				{
					typ:"ne",
					orientation:1
				},
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"n",
					orientation:2
				},
				
			],
			[
				{
					typ:"ne",
					orientation:0
				},
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ne",
					orientation:3
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				},
				
			],
			[
				{
					typ:"ne",
					orientation:0
				},
				{
					typ:"ne",
					orientation:3
				},
				{
					typ:"n",
					orientation:0
				},
				{
					typ:"n",
					orientation:2
				},
				{
					typ:"n",
					orientation:0
				},
				{
					typ:"n",
					orientation:0
				},
				{
					typ:"ne",
					orientation:0
				},
				{
					typ:"ne",
					orientation:3
				},
				
			],
			[
				{
					typ:"ne",
					orientation:1
				},
				{
					typ:"ns",
					orientation:1
				},
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"n",
					orientation:2
				},
				{
					typ:"n",
					orientation:2
				},
				{
					typ:"ns",
					orientation:1
				},
				{
					typ:"ne",
					orientation:2
				},
				
			],
			[
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ne",
					orientation:2
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ns",
					orientation:0
				},
				{
					typ:"ne",
					orientation:1
				},
				{
					typ:"ne",
					orientation:3
				},
				
			],
			[
				{
					typ:"ne",
					orientation:0
				},
				{
					typ:"n",
					orientation:0
				},
				{
					typ:"ne",
					orientation:3
				},
				{
					typ:"ne",
					orientation:0
				},
				{
					typ:"ne",
					orientation:3
				},
				{
					typ:"n",
					orientation:0
				},
				{
					typ:"ne",
					orientation:0
				},
				{
					typ:"ns",
					orientation:1
				},
				
			],
		
		] //SpinQuiz level end
			
	];
