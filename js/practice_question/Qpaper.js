const qpaper= {
    lfq: true,
    timer: 300,
    id: "test_pap_1",
    lang:["English", "Hindi"],
    data:
    [{
        group: "Mock Test 1",
        gid: "0",
        sections:[{
            section_info: 90000001,
            section: "Computer Section 1",
            id: "cs_sec_1",
            suf_ques: true,
            suf_options: true,
            num_ques: 2,
            q_type: "SMCQ",
            num_opt: 4,
            score: [4, -1],
            answered:[],
            viewed: [],
            mfr:[],
            amfr: [],
            questions: ['001', '002']
        },
        {
            section_info: 90000002,
            section: "Mathematics Section 1",
            id: "math_sec_2",
            suf_ques: true,
            suf_options: true,
            num_ques: 3,
            q_type: "MMCQ",
            num_opt: 4,
            score: [4, -1],
            answered: [],
            viewed: [],
            mfr:[],
            amfr: [],
            questions: ['003', '004', '005']

        },
        {
            section_info: 90000004,
            section: "Mathematics Section 2",
            id: "math_sec_3",
            suf_ques: true,
            num_ques: 2,
            q_type: "integer",
            num_opt: 10,
            score: [3, 0],
            answered: [],
            viewed: [],
            mfr:[],
            amfr: [],
            questions: ['006', '007']

        }
    ]

    }
]
}

export default qpaper;