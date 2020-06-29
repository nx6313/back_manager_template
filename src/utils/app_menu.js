export var appMenuOpt = {
    bg: '#545c64',
    txtColor: '#fff',
    activeTxtColor: '#ffd04b',
    uniqueOpened: true
}
export var appMenu = [
    {
        icon: 'el-icon-location',
        txt: '导航一',
        router: '',
        disabled: false,
        childrenWithGroup: [
            {
                groupTxt: '分组1',
                children: [
                    {
                        txt: '选项1',
                        router: '',
                        disabled: true,
                        children: []
                    },
                    {
                        txt: '选项2',
                        router: '',
                        disabled: false,
                        children: []
                    }
                ]
            },
            {
                groupTxt: '分组2',
                children: [
                    {
                        txt: '选项3',
                        router: '',
                        disabled: true,
                        children: []
                    },
                    {
                        txt: '选项4',
                        router: '',
                        disabled: false,
                        children: [
                            {
                                txt: '选项1',
                                router: '',
                                disabled: false
                            },
                            {
                                txt: '选项2',
                                router: '',
                                disabled: true
                            }
                        ]
                    }
                ]
            }
        ],
        children: []
    },
    {
        icon: 'el-icon-location',
        txt: '导航二',
        router: '',
        disabled: true,
        childrenWithGroup: [],
        children: [
            {
                txt: '选项1',
                router: '',
                disabled: false,
                children: [
                    {
                        txt: '选项2',
                        router: '',
                        disabled: false
                    }
                ]
            },
            {
                txt: '选项2',
                router: '',
                disabled: false,
                children: []
            }
        ]
    },
    {
        icon: 'el-icon-location',
        txt: '导航三',
        router: '',
        disabled: true,
        childrenWithGroup: [],
        children: []
    },
    {
        icon: 'el-icon-setting',
        txt: '导航四',
        router: '',
        disabled: false,
        childrenWithGroup: [],
        children: []
    }
]