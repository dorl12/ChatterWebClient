import man1 from '../man1.jpg';
import man2 from '../man2.jpg';
import man3 from '../man3.jpg';
import ross from '../ross.jpg';
import woman1 from '../woman1.jpg';
import lisa from '../lisa.jpg';
import video_ex from '../video_ex.mp4';
import RossRec from '../RossRec.m4a';

let messages = [{user: "or",
                chats: [{name: "Yotam Levin", image: man1, history:
                    [{sender: true, text: "Hi, how are you doing?", time: "18:03"}, 
                    {sender: true, text: "Wanna play volleyball?", time: "18:03"},
                    {sender: false, text: "Yea! I love it :)", time: "18:07"},
                    {sender: false, text: "Meet me in the court in half an hour", time: "18:09"},
                    {sender: true, text: "I'll see you there!", time: "18:10"}]},
                {name: "Lisa Kudrow", image: lisa, history:
                    [{sender: false, text: "Smelly cat, smelly cat...", time: "09:31"}, 
                    {sender: true, text: "What are they feeding you?", time: "11:19"},
                    {sender: false, text: "img:" + man1, time: "18:07"}]},
                {name: "Gilad Ashrov", image: man2, history:
                    [{sender: true, text: "Do you know about the Hamiltonian circle?", time: "21:07"}, 
                    {sender: false, text: "No, havn't heard of it.", time: "21:09"},
                    {sender: true, text: "Come take my class, it will teach you lots of wondeful things.", time: "22:52"},
                    {sender: true, text: "vid:" + video_ex, time: "22:53"}]},
                {name: "Adi Ben Tzvi", image: woman1, history:
                    [{sender: true, text: "Do you like Linear Algebra?", time: "16:48"}, 
                    {sender: false, text: "No, not so much...", time: "16:51"},
                    {sender: true, text: "That's too bad.", time: "16:52"},
                    {sender: false, text: "I'll try it next year maybe.", time: "16:54"}]},
                {name: "Ross Geller", image: ross, history:
                    [{sender: false, text: "DIVORCE RULES!!", time: "16:48"}, 
                    {sender: true, text: "Are you sure Ross?", time: "16:51"},
                    {sender: true, text: "rec:" + RossRec, time: "16:52"}]}]},

                {user: "yotam",
                chats: [{name: "Or Drukman", image: man3, history:
                    [{sender: true, text: "Hi, how are you doing?", time: "18:03"}, 
                    {sender: true, text: "Wanna play volleyball?", time: "18:03"},
                    {sender: false, text: "Yea! I love it :)", time: "18:07"},
                    {sender: false, text: "Meet me in the court in half an hour", time: "18:09"},
                    {sender: true, text: "I'll see you there!", time: "18:10"}]},
                {name: "Lisa Kudrow", image: lisa, history:
                    [{sender: false, text: "Smelly cat, smelly cat...", time: "09:31"}, 
                    {sender: true, text: "What are they feeding you?", time: "11:19"},
                    {sender: false, text: "img:" + man1, time: "18:07"}]},
                {name: "Gilad Ashrov", image: man2, history:
                    [{sender: true, text: "Do you know about the Hamiltonian circle?", time: "21:07"}, 
                    {sender: false, text: "No, havn't heard of it.", time: "21:09"},
                    {sender: true, text: "Come take my class, it will teach you lots of wondeful things.", time: "22:52"},
                    {sender: true, text: "vid:" + video_ex, time: "22:53"}]},
                {name: "Adi Ben Tzvi", image: woman1, history:
                    [{sender: true, text: "Do you like Linear Algebra?", time: "16:48"}, 
                    {sender: false, text: "No, not so much...", time: "16:51"},
                    {sender: true, text: "That's too bad.", time: "16:52"},
                    {sender: false, text: "I'll try it next year maybe.", time: "16:54"}]},
                {name: "Ross Geller", image: ross, history:
                    [{sender: false, text: "DIVORCE RULES!!", time: "16:48"}, 
                    {sender: true, text: "Are you sure Ross?", time: "16:51"},
                    {sender: true, text: "rec:" + RossRec, time: "16:52"}]}]},

                {user: "lisa",
                chats: [{name: "Or Drukman", image: man3, history:
                    [{sender: true, text: "Hi, how are you doing?", time: "18:03"}, 
                    {sender: true, text: "Wanna play volleyball?", time: "18:03"},
                    {sender: false, text: "Yea! I love it :)", time: "18:07"},
                    {sender: false, text: "Meet me in the court in half an hour", time: "18:09"},
                    {sender: true, text: "I'll see you there!", time: "18:10"}]},
                {name: "Yotam Levin", image: man1, history:
                    [{sender: false, text: "Smelly cat, smelly cat...", time: "09:31"}, 
                    {sender: true, text: "What are they feeding you?", time: "11:19"},
                    {sender: false, text: "img:" + man1, time: "18:07"}]},
                {name: "Gilad Ashrov", image: man2, history:
                    [{sender: true, text: "Do you know about the Hamiltonian circle?", time: "21:07"}, 
                    {sender: false, text: "No, havn't heard of it.", time: "21:09"},
                    {sender: true, text: "Come take my class, it will teach you lots of wondeful things.", time: "22:52"},
                    {sender: true, text: "vid:" + video_ex, time: "22:53"}]},
                {name: "Adi Ben Tzvi", image: woman1, history:
                    [{sender: true, text: "Do you like Linear Algebra?", time: "16:48"}, 
                    {sender: false, text: "No, not so much...", time: "16:51"},
                    {sender: true, text: "That's too bad.", time: "16:52"},
                    {sender: false, text: "I'll try it next year maybe.", time: "16:54"}]},
                {name: "Ross Geller", image: ross, history:
                    [{sender: false, text: "DIVORCE RULES!!", time: "16:48"}, 
                    {sender: true, text: "Are you sure Ross?", time: "16:51"},
                    {sender: true, text: "rec:" + RossRec, time: "16:52"}]}]},

                {user: "ross",
                chats: [{name: "Or Drukman", image: man3, history:
                    [{sender: true, text: "Hi, how are you doing?", time: "18:03"}, 
                    {sender: true, text: "Wanna play volleyball?", time: "18:03"},
                    {sender: false, text: "Yea! I love it :)", time: "18:07"},
                    {sender: false, text: "Meet me in the court in half an hour", time: "18:09"},
                    {sender: true, text: "I'll see you there!", time: "18:10"}]},
                {name: "Yotam Levin", image: man1, history:
                    [{sender: false, text: "Smelly cat, smelly cat...", time: "09:31"}, 
                    {sender: true, text: "What are they feeding you?", time: "11:19"},
                    {sender: false, text: "img:" + man1, time: "18:07"}]},
                {name: "Gilad Ashrov", image: man2, history:
                    [{sender: true, text: "Do you know about the Hamiltonian circle?", time: "21:07"}, 
                    {sender: false, text: "No, havn't heard of it.", time: "21:09"},
                    {sender: true, text: "Come take my class, it will teach you lots of wondeful things.", time: "22:52"},
                    {sender: true, text: "vid:" + video_ex, time: "22:53"}]},
                {name: "Adi Ben Tzvi", image: woman1, history:
                    [{sender: true, text: "Do you like Linear Algebra?", time: "16:48"}, 
                    {sender: false, text: "No, not so much...", time: "16:51"},
                    {sender: true, text: "That's too bad.", time: "16:52"},
                    {sender: false, text: "I'll try it next year maybe.", time: "16:54"}]},
                {name: "Lisa Kudrow", image: lisa, history:
                    [{sender: false, text: "DIVORCE RULES!!", time: "16:48"}, 
                    {sender: true, text: "Are you sure Ross?", time: "16:51"},
                    {sender: true, text: "rec:" + RossRec, time: "16:52"}]}]},

                {user: "gilad",
                chats: [{name: "Or Drukman", image: man3, history:
                    [{sender: true, text: "Hi, how are you doing?", time: "18:03"}, 
                    {sender: true, text: "Wanna play volleyball?", time: "18:03"},
                    {sender: false, text: "Yea! I love it :)", time: "18:07"},
                    {sender: false, text: "Meet me in the court in half an hour", time: "18:09"},
                    {sender: true, text: "I'll see you there!", time: "18:10"}]},
                {name: "Yotam Levin", image: man1, history:
                    [{sender: false, text: "Smelly cat, smelly cat...", time: "09:31"}, 
                    {sender: true, text: "What are they feeding you?", time: "11:19"},
                    {sender: false, text: "img:" + man1, time: "18:07"}]},
                {name: "Ross Geller", image: ross, history:
                    [{sender: true, text: "Do you know about the Hamiltonian circle?", time: "21:07"}, 
                    {sender: false, text: "No, havn't heard of it.", time: "21:09"},
                    {sender: true, text: "Come take my class, it will teach you lots of wondeful things.", time: "22:52"},
                    {sender: true, text: "vid:" + video_ex, time: "22:53"}]},
                {name: "Adi Ben Tzvi", image: woman1, history:
                    [{sender: true, text: "Do you like Linear Algebra?", time: "16:48"}, 
                    {sender: false, text: "No, not so much...", time: "16:51"},
                    {sender: true, text: "That's too bad.", time: "16:52"},
                    {sender: false, text: "I'll try it next year maybe.", time: "16:54"}]},
                {name: "Lisa Kudrow", image: lisa, history:
                    [{sender: false, text: "DIVORCE RULES!!", time: "16:48"}, 
                    {sender: true, text: "Are you sure Ross?", time: "16:51"},
                    {sender: true, text: "rec:" + RossRec, time: "16:52"}]}]},

                {user: "adi",
                chats: [{name: "Or Drukman", image: man3, history:
                    [{sender: true, text: "Hi, how are you doing?", time: "18:03"}, 
                    {sender: true, text: "Wanna play volleyball?", time: "18:03"},
                    {sender: false, text: "Yea! I love it :)", time: "18:07"},
                    {sender: false, text: "Meet me in the court in half an hour", time: "18:09"},
                    {sender: true, text: "I'll see you there!", time: "18:10"}]},
                {name: "Yotam Levin", image: man1, history:
                    [{sender: false, text: "Smelly cat, smelly cat...", time: "09:31"}, 
                    {sender: true, text: "What are they feeding you?", time: "11:19"},
                    {sender: false, text: "img:" + man1, time: "18:07"}]},
                {name: "Ross Geller", image: ross, history:
                    [{sender: true, text: "Do you know about the Hamiltonian circle?", time: "21:07"}, 
                    {sender: false, text: "No, havn't heard of it.", time: "21:09"},
                    {sender: true, text: "Come take my class, it will teach you lots of wondeful things.", time: "22:52"},
                    {sender: true, text: "vid:" + video_ex, time: "22:53"}]},
                {name: "Gilad Ashrov", image: man2, history:
                    [{sender: true, text: "Do you like Linear Algebra?", time: "16:48"}, 
                    {sender: false, text: "No, not so much...", time: "16:51"},
                    {sender: true, text: "That's too bad.", time: "16:52"},
                    {sender: false, text: "I'll try it next year maybe.", time: "16:54"}]},
                {name: "Lisa Kudrow", image: lisa, history:
                    [{sender: false, text: "DIVORCE RULES!!", time: "16:48"}, 
                    {sender: true, text: "Are you sure Ross?", time: "16:51"},
                    {sender: true, text: "rec:" + RossRec, time: "16:52"}]}]},
];


export default messages;