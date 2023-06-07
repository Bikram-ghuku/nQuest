const qpaper= {

    lfq: true,
    timer: 180,
    id: "test_pap_1",
    data:
    [{
        group: "Physics Quiz Main",
        gid: "0",
        attempted: [],
        sections:[{
            section_info: 90000001,
            section: "Physics Section 1",
            id: "py_sec_1",
            num_ques: 20,
            q_type: "SMCQ",
            num_opt: 4,
            score: [3, -1],
            attempted:[]
        },
        {
            section_info: 90000002,
            section: "Physics Section 2",
            id: "py_sec_2",
            num_ques: 7,
            q_type: "integer",
            num_opt: 10,
            score: [3, -1],
            attempted: []

        },
        {
            section_info: 90000003,
            section: "Physics Section 3",
            id: "py_sec_3",
            num_ques: 3,
            q_type: "MMCQ",
            num_opt: 4,
            score:[4, -2],
            attempted: []
        }]

    },
    {
        group: "Chemistry Quiz Main",
        gid: "1",
        sections:[{
            section_info: 90000001,
            section: "Chemistry Section 1",
            id: "chem_sec_1",
            num_ques: 20,
            q_type: "SMCQ",
            num_opt: 4,
            score: [3, -1],
            attempted: []
        },
        {   
            section_info: 90000002,
            section: "Chemistry Section 2",
            id: "chem_sec_2",
            num_ques: 7,
            q_type: "integer",
            num_opt: 4,
            score: [3, -1],
            attempted: []

        },
        {   
            section_info: 90000003,
            section: "Chemistry Section 3",
            id: "chem_sec_3",
            num_ques: 3,
            q_type: "MMCQ",
            num_opt: 4,
            score: [4, -1],
            attempted: []
        }]


    }
]
}

export default qpaper;