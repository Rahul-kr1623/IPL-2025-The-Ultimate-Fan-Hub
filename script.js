// --- DATA FOR ALL 84 MATCHES (FINAL & COMPLETE) ---
const matchData = [
    // Match 1 (index 0)
    {
        team1: { name: 'Kolkata Knight Riders', logo: 'Logos/kkr_logo.png', score: '174/8', overs: '20' },
        team2: { name: 'Royal Challengers Bengaluru', logo: 'Logos/rcb_logo.png', score: '177/3', overs: '16.2' },
        status: 'Royal Challengers Bengaluru won by 7 wickets (22 balls left)',
        toss: "RCB won the toss and decided to bowl",
        venue: "Eden Gardens",
        pom: "Virat Kohli", // Assuming based on performance
        innings1: {
            teamName: 'Knight Riders',
            batting: [
                { name: "Quinton de Kock (Wk)", out: "c Jitesh Sharma b Josh Hazlewood", runs: 4, balls: 5, fours: 1, sixes: 0, sr: 80.00 },
                { name: "Sunil Narine", out: "c Jitesh Sharma b Rasikh Salam Dar", runs: 44, balls: 26, fours: 5, sixes: 3, sr: 169.23 },
                { name: "Ajinkya Rahane (C)", out: "c Rasikh Salam Dar b Krunal Pandya", runs: 56, balls: 31, fours: 6, sixes: 4, sr: 180.65 },
                { name: "Venkatesh Iyer", out: "b Krunal Pandya", runs: 6, balls: 7, fours: 1, sixes: 0, sr: 85.71 },
                { name: "Angkrish Raghuvanshi", out: "c Jitesh Sharma b Yash Dayal", runs: 30, balls: 22, fours: 2, sixes: 1, sr: 136.36 },
                { name: "Rinku Singh", out: "b Krunal Pandya", runs: 12, balls: 10, fours: 1, sixes: 0, sr: 120.00 },
                { name: "Andre Russell", out: "b Suyash Sharma", runs: 4, balls: 3, fours: 1, sixes: 0, sr: 133.33 },
                { name: "Ramandeep Singh", out: "c Sharma b Josh Hazlewood", runs: 6, balls: 9, fours: 0, sixes: 0, sr: 66.67 },
                { name: "Harshit Rana", out: "c Jitesh Sharma b Josh Hazlewood", runs: 5, balls: 6, fours: 1, sixes: 0, sr: 83.33 },
                { name: "Spencer Johnson", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 6, details: "(W 4, LB 2)" },
            total: { score: "174", details: "(8 wkts, 20 ov)" },
            yetToBat: "Varun Chakravarthy, Vaibhav Arora (IP)",
            fow: "4/1 (Q. de Kock, 0.5 ov) · 107/2 (S. Narine, 9.6 ov) · 109/3 (A. Rahane, 10.3 ov) · 125/4 (V. Iyer, 12.1 ov) · 145/5 (R. Singh, 14.6 ov) · 150/6 (A. Russell, 15.4 ov) · 165/7 (A. Raghuvanshi, 18.5 ov) · 173/8 (H. Rana, 19.5 ov)",
            bowling: [
                { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 22, wickets: 2, econ: 5.50 },
                { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 25, wickets: 1, econ: 8.33 },
                { name: "Rasikh Salam Dar", overs: 3.0, maidens: 0, runs: 35, wickets: 1, econ: 11.67 },
                { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 29, wickets: 3, econ: 7.25 },
                { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 47, wickets: 1, econ: 11.75 },
                { name: "Liam Livingstone", overs: 2.0, maidens: 0, runs: 14, wickets: 0, econ: 7.00 }
            ]
        },
        innings2: {
            teamName: 'Royal Challengers',
            batting: [
                { name: "Phil Salt", out: "c Spencer Johnson b Varun Chakravarthy", runs: 56, balls: 31, fours: 9, sixes: 2, sr: 180.65 },
                { name: "Virat Kohli", out: "not out", runs: 59, balls: 36, fours: 4, sixes: 3, sr: 163.89 },
                { name: "Devdutt Padikkal (P)", out: "c Ramandeep Singh b Sunil Narine", runs: 10, balls: 10, fours: 1, sixes: 0, sr: 100.00 },
                { name: "Rajat Patidar (C)", out: "c Rinku Singh b Vaibhav Arora", runs: 34, balls: 16, fours: 5, sixes: 1, sr: 212.50 },
                { name: "Liam Livingstone", out: "not out", runs: 15, balls: 5, fours: 2, sixes: 1, sr: 300.00 }
            ],
            extras: { total: 3, details: "(W 1, LB 2)" },
            total: { score: "177", details: "(3 wkts, 16.2 ov)" },
            yetToBat: "Jitesh Sharma (Wk), Tim David, Krunal Pandya, Rasikh Salam Dar, Josh Hazlewood, Yash Dayal, Suyash Sharma",
            fow: "95/1 (P. Salt, 8.3 ov) · 118/2 (D. Padikkal, 11.4 ov) · 162/3 (R. Patidar, 15.3 ov)",
            bowling: [
                { name: "Vaibhav Arora (P)", overs: 3.0, maidens: 0, runs: 42, wickets: 1, econ: 14.00 },
                { name: "Spencer Johnson", overs: 2.2, maidens: 0, runs: 31, wickets: 0, econ: 13.29 },
                { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 43, wickets: 1, econ: 10.75 },
                { name: "Harshit Rana", overs: 3.0, maidens: 0, runs: 32, wickets: 0, econ: 10.67 },
                { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 27, wickets: 1, econ: 6.75 }
            ]
        }
    },
    // Match 2
    // Match 2 (index 1)
    {
        team1: { name: 'Sunrisers Hyderabad', logo: 'Logos/srh_logo.jpg', score: '286/6', overs: '20' },
        team2: { name: 'Rajasthan Royals', logo: 'Logos/rr_logo.jpg', score: '242/6', overs: '20' },
        status: 'SRH won by 44 runs',
        toss: "RR won the toss and decided to bowl",
        venue: "Rajiv Gandhi International Stadium",
        pom: "Travis Head", // Assuming based on performance
        innings1: {
            teamName: 'Sunrisers',
            batting: [
                { name: "Abhishek Sharma", out: "c Yashasvi Jaiswal b Maheesh Theekshana", runs: 24, balls: 11, fours: 5, sixes: 0, sr: 218.18 },
                { name: "Travis Head", out: "c Shimron Hetmyer b Tushar Deshpande", runs: 67, balls: 31, fours: 9, sixes: 3, sr: 216.13 },
                { name: "Ishan Kishan", out: "not out", runs: 106, balls: 47, fours: 11, sixes: 6, sr: 225.53 },
                { name: "Nitish Kumar Reddy", out: "c Yashasvi Jaiswal b Maheesh Theekshana", runs: 30, balls: 15, fours: 4, sixes: 1, sr: 200.00 },
                { name: "Heinrich Klaasen (Wk)", out: "c Hetmyer b Sandeep Sharma", runs: 34, balls: 14, fours: 5, sixes: 1, sr: 242.86 },
                { name: "Aniket Verma", out: "c Jofra Archer b Tushar Deshpande", runs: 7, balls: 3, fours: 0, sixes: 1, sr: 233.33 },
                { name: "Abhinav Manohar", out: "run out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Pat Cummins (C)", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
            ],
            extras: { total: 18, details: "(nb 3, w 10, b 4, lb 1)" },
            total: { score: "286", details: "(6 wkts, 20 ov)" },
            yetToBat: "Simarjeet Singh, Harshal Patel, Mohammed Shami, Adam Zampa",
            fow: "45/1 (A. Sharma, 3.1 ov) · 130/2 (T. Head, 8.3 ov) · 202/3 (N. K. Reddy, 14.2 ov) · 258/4 (H. Klaasen, 18.2 ov) · 272/5 (A. Verma, 19.2 ov) · 272/6 (A. Manohar, 19.3 ov)",
            bowling: [
                { name: "Fazalhaq Farooqi", overs: 3.0, maidens: 0, runs: 49, wickets: 0, econ: 16.33 },
                { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 52, wickets: 2, econ: 13.00 },
                { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 76, wickets: 0, econ: 19.00 },
                { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 51, wickets: 1, econ: 12.75 },
                { name: "Nitish Rana", overs: 1.0, maidens: 0, runs: 9, wickets: 0, econ: 9.00 },
                { name: "Tushar Deshpande", overs: 4.0, maidens: 0, runs: 44, wickets: 3, econ: 11.00 }
            ]
        },
        innings2: {
            teamName: 'Royals',
            batting: [
                { name: "Yashasvi Jaiswal", out: "c Pat Cummins b Simarjeet Singh", runs: 1, balls: 5, fours: 0, sixes: 0, sr: 20.00 },
                { name: "Sanju Samson", out: "c Heinrich Klaasen b Harshal Patel", runs: 66, balls: 37, fours: 7, sixes: 4, sr: 178.38 },
                { name: "Riyan Parag", out: "c Abhishek Sharma b Simarjeet Singh", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
                { name: "Nitish Rana", out: "c Pat Cummins b Mohammed Shami", runs: 11, balls: 8, fours: 2, sixes: 0, sr: 137.50 },
                { name: "Dhruv Jurel (Wk)", out: "c Ishan Kishan b Adam Zampa", runs: 70, balls: 35, fours: 5, sixes: 6, sr: 200.00 },
                { name: "Shimron Hetmyer", out: "c Abhinav Manohar b Harshal Patel", runs: 42, balls: 23, fours: 1, sixes: 4, sr: 182.61 },
                { name: "Shubham Dubey", out: "not out", runs: 34, balls: 11, fours: 1, sixes: 4, sr: 309.09 },
                { name: "Jofra Archer", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 13, details: "(nb 2, w 7, b 4)" },
            total: { score: "242", details: "(6 wkts, 20 ov)" },
            yetToBat: "Maheesh Theekshana, Tushar Deshpande, Sandeep Sharma, Fazalhaq Farooqi",
            fow: "2/1 (Y. Jaiswal, 1.3 ov) · 24/2 (R. Parag, 1.6 ov) · 50/3 (N. Rana, 4.1 ov) · 161/4 (S. Samson, 13.6 ov) · 161/5 (D. Jurel, 14.2 ov) · 241/6 (S. Hetmyer, 19.5 ov)",
            bowling: [
                { name: "Mohammed Shami", overs: 3.0, maidens: 0, runs: 33, wickets: 1, econ: 11.00 },
                { name: "Simarjeet Singh", overs: 3.0, maidens: 0, runs: 46, wickets: 2, econ: 15.33 },
                { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 60, wickets: 0, econ: 15.00 },
                { name: "Abhishek Sharma", overs: 2.0, maidens: 0, runs: 17, wickets: 0, econ: 8.50 },
                { name: "Adam Zampa", overs: 4.0, maidens: 0, runs: 48, wickets: 1, econ: 12.00 },
                { name: "Harshal Patel", overs: 4.0, maidens: 0, runs: 34, wickets: 2, econ: 8.50 }
            ]
        }
    },
    // Match 3 (index 2)
    {
        team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '155/9', overs: '20' },
        team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '158/6', overs: '19.1' },
        status: 'CSK won by 4 wickets (5 balls left)',
        toss: "CSK won the toss and decided to bowl",
        venue: "MA Chidambaram Stadium",
        pom: "Ruturaj Gaikwad", // Assuming based on performance
        innings1: {
            teamName: 'Indians',
            batting: [
                { name: "Rohit Sharma", out: "c Shivam Dube b Khaleel Ahmed", runs: 4, balls: 4, fours: 1, sixes: 0, sr: 100.00 },
                { name: "Robin Minz (Wk)", out: "c Gaikwad b Khaleel Ahmed", runs: 13, balls: 7, fours: 3, sixes: 0, sr: 185.71 },
                { name: "Will Jacks", out: "b Ravichandran Ashwin", runs: 11, balls: 7, fours: 2, sixes: 0, sr: 157.14 },
                { name: "Suryakumar Yadav (C)", out: "c & b Noor Ahmad", runs: 29, balls: 26, fours: 2, sixes: 1, sr: 111.54 },
                { name: "Tilak Varma", out: "lbw b Noor Ahmad", runs: 31, balls: 25, fours: 2, sixes: 2, sr: 124.00 },
                { name: "Naman Dhir", out: "c Gaikwad b Jadeja", runs: 3, balls: 9, fours: 0, sixes: 0, sr: 33.33 },
                { name: "Mitchell Santner", out: "c Gaikwad b Noor Ahmad", runs: 17, balls: 12, fours: 1, sixes: 0, sr: 141.67 },
                { name: "Deepak Chahar", out: "not out", runs: 28, balls: 15, fours: 2, sixes: 2, sr: 186.67 },
                { name: "Trent Boult", out: "c Gaikwad b Khaleel Ahmed", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
                { name: "Satyanarayana Raju", out: "run out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 10, details: "(nb 1, w 4, b 4, lb 1)" },
            total: { score: "155", details: "(9 wkts, 20 ov)" },
            yetToBat: "Vignesh Puthur",
            fow: "9/1 (R. Sharma, 0.4 ov) · 21/2 (R. Minz, 2.2 ov) · 38/3 (W. Jacks, 4.4 ov) · 87/4 (S. Yadav, 12.3 ov) · 98/5 (N. Dhir, 14.5 ov) · 108/6 (T. Varma, 16.1 ov) · 125/7 (M. Santner, 17.6 ov) · 141/8 (T. Boult, 18.6 ov)",
            bowling: [
                { name: "Khaleel Ahmed", overs: 4.0, maidens: 0, runs: 29, wickets: 3, econ: 7.25 },
                { name: "Sam Curran", overs: 1.0, maidens: 0, runs: 13, wickets: 0, econ: 13.00 },
                { name: "Nathan Ellis", overs: 4.0, maidens: 0, runs: 38, wickets: 1, econ: 9.50 },
                { name: "Ravichandran Ashwin", overs: 4.0, maidens: 0, runs: 31, wickets: 1, econ: 7.75 },
                { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 21, wickets: 1, econ: 7.00 },
                { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 18, wickets: 4, econ: 4.50 }
            ]
        },
        innings2: {
            teamName: 'Super Kings',
            batting: [
                { name: "Rachin Ravindra", out: "not out", runs: 15, balls: 45, fours: 2, sixes: 4, sr: 116.67 },
                { name: "Rahul Tripathi", out: "c Ryan Rickelton b Deepak Chahar", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
                { name: "Ruturaj Gaikwad (C)", out: "c Naman Dhir b Vignesh Puthur", runs: 53, balls: 26, fours: 6, sixes: 3, sr: 203.85 },
                { name: "Shivam Dube", out: "c Rohit Sharma b Vignesh Puthur", runs: 9, balls: 7, fours: 0, sixes: 1, sr: 128.57 },
                { name: "Deepak Hooda", out: "c Satyanarayana Raju b Vignesh Puthur", runs: 3, balls: 5, fours: 0, sixes: 0, sr: 60.00 },
                { name: "Sam Curran", out: "c & b Will Jacks", runs: 4, balls: 9, fours: 0, sixes: 0, sr: 44.44 },
                { name: "Ravichandran Ashwin", out: "c Will Jacks b Naman Dhir", runs: 17, balls: 18, fours: 1, sixes: 0, sr: 94.44 },
                { name: "MS Dhoni (Wk)", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
            ],
            extras: { total: 5, details: "(w 5)" },
            total: { score: "158", details: "(6 wkts, 19.1 ov)" },
            yetToBat: "Ravichandran Ashwin, Noor Ahmad, Nathan Ellis, Khaleel Ahmed",
            fow: "11/1 (R. Tripathi, 1.4 ov) · 78/2 (R. Gaikwad, 7.5 ov) · 95/3 (S. Dube, 9.4 ov) · 107/4 (D. Hooda, 11.4 ov) · 118/5 (S. Curran, 14.1 ov) · 152/6 (R. Ashwin, 18.4 ov)",
            bowling: [
                { name: "Trent Boult", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 },
                { name: "Deepak Chahar", overs: 2.0, maidens: 0, runs: 18, wickets: 1, econ: 9.00 },
                { name: "Satyanarayana Raju", overs: 1.0, maidens: 0, runs: 13, wickets: 0, econ: 13.00 },
                { name: "Mitchell Santner", overs: 2.1, maidens: 0, runs: 24, wickets: 0, econ: 11.08 },
                { name: "Will Jacks", overs: 4.0, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
                { name: "Vignesh Puthur", overs: 4.0, maidens: 0, runs: 32, wickets: 3, econ: 8.00 },
                { name: "Naman Dhir", overs: 3.0, maidens: 0, runs: 12, wickets: 1, econ: 4.00 }
            ]
        }
    },
    // Match 4 (index 3)
    {
        team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '209/8', overs: '20' },
        team2: { name: 'DC', logo: 'Logos/dc_logo.png', score: '211/9', overs: '19.3' },
        status: 'DC won by 1 wicket (3 balls left)',
        toss: "DC won the toss and decided to bowl",
        venue: "ACA-VDCA Cricket Stadium",
        pom: "Ashutosh Sharma", // Assuming based on performance
        innings1: {
            teamName: 'Super Giants',
            batting: [
                { name: "Aiden Markram", out: "c Fraser-McGurk b Vipraj Nigam", runs: 15, balls: 13, fours: 1, sixes: 1, sr: 115.38 },
                { name: "Mitchell Marsh", out: "c Tristan Stubbs b Mukesh Kumar", runs: 72, balls: 36, fours: 6, sixes: 6, sr: 200.00 },
                { name: "Nicholas Pooran", out: "not out", runs: 75, balls: 30, fours: 6, sixes: 7, sr: 250.00 },
                { name: "Rishabh Pant (C) (Wk)", out: "c Ashutosh Sharma b Kuldeep Yadav", runs: 0, balls: 6, fours: 0, sixes: 0, sr: 0.00 },
                { name: "David Miller", out: "not out", runs: 27, balls: 19, fours: 1, sixes: 2, sr: 142.11 },
                { name: "Ayush Badoni", out: "c Tristan Stubbs b Kuldeep Yadav", runs: 4, balls: 5, fours: 0, sixes: 0, sr: 80.00 },
                { name: "Shahbaz Ahmed", out: "c Tristan Stubbs b Mitchell Starc", runs: 9, balls: 8, fours: 1, sixes: 0, sr: 112.50 }
            ],
            extras: { total: 7, details: "(nb 1, w 4, lb 2)" },
            total: { score: "209", details: "(8 wkts, 20 ov)" },
            yetToBat: "Prince Yadav, M Siddharth (IP)",
            fow: "46/1 (A. Markram, 4.4 ov) · 133/2 (M. Marsh, 11.4 ov) · 161/3 (R. Pant, 13.4 ov) · 168/4 (A. Badoni, 14.3 ov) · 174/5 (D. Miller, 16.3 ov) · 177/6 (S. Thakur, 17.4 ov) · 194/7 (S. Ahmed, 18.4 ov) · 194/8 (R. Bishnoi, 18.5 ov)",
            bowling: [
                { name: "Mitchell Starc", overs: 4.0, maidens: 0, runs: 42, wickets: 3, econ: 10.50 },
                { name: "Axar Patel (C)", overs: 3.0, maidens: 0, runs: 18, wickets: 0, econ: 6.00 },
                { name: "Vipraj Nigam", overs: 2.0, maidens: 0, runs: 35, wickets: 1, econ: 17.50 },
                { name: "Mukesh Kumar", overs: 2.0, maidens: 0, runs: 22, wickets: 1, econ: 11.00 },
                { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
                { name: "Mohit Sharma", overs: 4.0, maidens: 0, runs: 42, wickets: 0, econ: 10.50 },
                { name: "Tristan Stubbs", overs: 1.0, maidens: 0, runs: 26, wickets: 0, econ: 26.00 }
            ]
        },
        innings2: {
            teamName: 'Capitals',
            batting: [
                { name: "Jake Fraser-McGurk", out: "c & b Shardul Thakur", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
                { name: "Faf du Plessis", out: "c & b Ravi Bishnoi", runs: 29, balls: 16, fours: 3, sixes: 2, sr: 181.11 },
                { name: "Abishek Porel (Wk)", out: "c Nicholas Pooran b Shardul Thakur", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Sameer Rizvi", out: "c Ayush Badoni b M Siddharth", runs: 4, balls: 4, fours: 1, sixes: 0, sr: 100.00 },
                { name: "Axar Patel (C)", out: "c Nicholas Pooran b Digvesh Singh", runs: 22, balls: 11, fours: 3, sixes: 1, sr: 200.00 },
                { name: "Tristan Stubbs", out: "b M Siddharth", runs: 34, balls: 22, fours: 1, sixes: 3, sr: 154.55 },
                { name: "Ashutosh Sharma (IP)", out: "not out", runs: 68, balls: 31, fours: 5, sixes: 5, sr: 212.90 },
                { name: "Vipraj Nigam", out: "c Nicholas Pooran b Digvesh Singh", runs: 39, balls: 15, fours: 5, sixes: 2, sr: 260.00 },
                { name: "Mitchell Starc", out: "c Ayush Badoni b Ravi Bishnoi", runs: 2, balls: 5, fours: 0, sixes: 0, sr: 40.00 },
                { name: "Kuldeep Yadav", out: "run out (Badoni)", runs: 5, balls: 5, fours: 1, sixes: 0, sr: 100.00 },
                { name: "Mohit Sharma", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
            ],
            extras: { total: 6, details: "(w 6)" },
            total: { score: "211", details: "(9 wkts, 19.3 ov)" },
            yetToBat: "Mukesh Kumar",
            fow: "2/1 (J. Fraser-McGurk, 0.3 ov) · 2/2 (A. Porel, 0.5 ov) · 7/3 (S. Rizvi, 1.4 ov) · 56/4 (A. Patel, 5.2 ov) · 98/5 (F. du Plessis, 9.2 ov) · 105/6 (T. Stubbs, 10.4 ov) · 130/7 (V. Nigam, 16.1 ov) · 171/8 (M. Starc, 17.1 ov) · 182/9 (K. Yadav, 18.3 ov)",
            bowling: [
                { name: "Shardul Thakur", overs: 3.0, maidens: 0, runs: 19, wickets: 2, econ: 6.33 },
                { name: "M Siddharth (P)", overs: 4.0, maidens: 0, runs: 39, wickets: 2, econ: 9.75 },
                { name: "Digvesh Singh", overs: 4.0, maidens: 0, runs: 31, wickets: 2, econ: 7.75 },
                { name: "Ravi Bishnoi", overs: 4.0, maidens: 0, runs: 53, wickets: 2, econ: 13.25 },
                { name: "Prince Yadav", overs: 4.0, maidens: 0, runs: 47, wickets: 0, econ: 11.75 },
                { name: "Shahbaz Ahmed", overs: 1.3, maidens: 0, runs: 22, wickets: 0, econ: 14.67 }
            ]
        }
    },
    // Match 5 (index 4)
    {
        team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '243/5', overs: '20' },
        team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '232/5', overs: '20' },
        status: 'PBKS won by 11 runs',
        toss: "GT won the toss and decided to bowl",
        venue: "Narendra Modi Stadium",
        pom: "Shreyas Iyer", // Assuming based on performance
        innings1: {
            teamName: 'Kings',
            batting: [
                { name: "Priyansh Arya", out: "c Sai Sudharsan b Rashid Khan", runs: 57, balls: 25, fours: 7, sixes: 2, sr: 228.00 },
                { name: "Prabhsimran Singh (Wk)", out: "c Sai Kishore b Kagiso Rabada", runs: 5, balls: 8, fours: 1, sixes: 0, sr: 62.50 },
                { name: "Shreyas Iyer (C)", out: "not out", runs: 97, balls: 42, fours: 5, sixes: 9, sr: 230.95 },
                { name: "Azmatullah Omarzai", out: "c & b Sai Kishore", runs: 16, balls: 15, fours: 2, sixes: 1, sr: 106.67 },
                { name: "Glenn Maxwell", out: "c & b Sai Kishore", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Marco Jansen", out: "not out", runs: 20, balls: 15, fours: 1, sixes: 2, sr: 133.33 },
                { name: "Shashank Singh", out: "not out", runs: 44, balls: 16, fours: 6, sixes: 2, sr: 275.00 }
            ],
            extras: { total: 4, details: "(w 6, b 6, lb 2)" },
            total: { score: "243", details: "(5 wkts, 20 ov)" },
            yetToBat: "Suryansh Shedge, Arshdeep Singh, Yuzvendra Chahal, Vyshak Vijay Kumar (IP)",
            fow: "39/1 (P. Singh, 3.1 ov) · 73/2 (P. Arya, 6.4 ov) · 156/3 (A. Omarzai, 10.3 ov) · 156/4 (G. Maxwell, 10.4 ov) · 182/5 (M. Jansen, 15.2 ov)",
            bowling: [
                { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 54, wickets: 0, econ: 13.50 },
                { name: "Kagiso Rabada", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
                { name: "Arshad Khan", overs: 1.0, maidens: 0, runs: 21, wickets: 0, econ: 21.00 },
                { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 48, wickets: 1, econ: 12.00 },
                { name: "Prasidh Krishna", overs: 3.0, maidens: 0, runs: 41, wickets: 0, econ: 13.67 },
                { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 36, wickets: 3, econ: 7.50 }
            ]
        },
        innings2: {
            teamName: 'Titans',
            batting: [
                { name: "Sai Sudharsan", out: "c Prabhsimran Singh b Arshdeep Singh", runs: 74, balls: 41, fours: 5, sixes: 6, sr: 180.49 },
                { name: "Shubman Gill (C)", out: "run out", runs: 33, balls: 14, fours: 2, sixes: 3, sr: 235.71 },
                { name: "Jos Buttler (Wk)", out: "c Priyansh Arya b Glenn Maxwell", runs: 54, balls: 33, fours: 4, sixes: 2, sr: 163.64 },
                { name: "Sherfane Rutherford (IP)", out: "run out", runs: 46, balls: 28, fours: 4, sixes: 3, sr: 164.29 },
                { name: "Rahul Tewatia", out: "run out (Shashank Singh)", runs: 6, balls: 2, fours: 0, sixes: 1, sr: 300.00 },
                { name: "Shahrukh Khan", out: "run out", runs: 6, balls: 1, fours: 0, sixes: 1, sr: 600.00 },
                { name: "Arshad Khan", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 12, details: "(w 8, lb 4)" },
            total: { score: "232", details: "(5 wkts, 20 ov)" },
            yetToBat: "Sai Kishore, Rashid Khan, Kagiso Rabada, Mohammed Siraj, Prasidh Krishna",
            fow: "61/1 (S. Gill, 5.3 ov) · 145/2 (S. Sudharsan, 12.3 ov) · 159/3 (J. Buttler, 17.6 ov) · 217/4 (R. Tewatia, 19.1 ov) · 225/5 (S. Rutherford, 19.4 ov)",
            bowling: [
                { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 36, wickets: 2, econ: 9.00 },
                { name: "Azmatullah Omarzai", overs: 2.0, maidens: 0, runs: 29, wickets: 0, econ: 14.50 },
                { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
                { name: "Glenn Maxwell", overs: 2.0, maidens: 0, runs: 26, wickets: 1, econ: 13.00 },
                { name: "Marcus Stoinis", overs: 2.0, maidens: 0, runs: 31, wickets: 0, econ: 15.50 },
                { name: "Yuzvendra Chahal", overs: 3.0, maidens: 0, runs: 34, wickets: 0, econ: 11.33 },
                { name: "Vyshak Vijay Kumar (IP)", overs: 3.0, maidens: 0, runs: 28, wickets: 0, econ: 9.33 }
            ]
        }
    },
    // Match 6 (index 5)
    {
        team1: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '151/9', overs: '20' },
        team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '153/2', overs: '17.3' },
        status: 'KKR won by 8 wickets (15 balls left)',
        toss: "KKR won the toss and decided to bowl",
        venue: "Barsapara Stadium",
        pom: "Quinton de Kock",
        innings1: {
            teamName: 'Royals',
            batting: [
                { name: "Yashasvi Jaiswal", out: "c & b Moeen Ali", runs: 28, balls: 24, fours: 2, sixes: 2, sr: 120.83 },
                { name: "Sanju Samson", out: "c Harshit Rana b Moeen Ali", runs: 13, balls: 11, fours: 2, sixes: 0, sr: 118.18 },
                { name: "Riyan Parag (C)", out: "c Angkrish Raghuvanshi b Varun Chakravarthy", runs: 25, balls: 15, fours: 0, sixes: 3, sr: 166.67 },
                { name: "Wanindu Hasaranga", out: "c Ajinkya Rahane b Varun Chakravarthy", runs: 4, balls: 4, fours: 0, sixes: 0, sr: 100.00 },
                { name: "Dhruv Jurel (Wk)", out: "not out", runs: 33, balls: 28, fours: 5, sixes: 0, sr: 117.86 },
                { name: "Shubham Dubey (P)", out: "c Andre Russell b Vaibhav Arora", runs: 9, balls: 12, fours: 1, sixes: 0, sr: 75.00 },
                { name: "Jofra Archer", out: "c Angkrish Raghuvanshi b Harshit Rana", runs: 18, balls: 7, fours: 0, sixes: 2, sr: 228.57 },
                { name: "Maheesh Theekshana", out: "run out (Johnson)", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 },
                { name: "Tushar Deshpande", out: "not out", runs: 2, balls: 1, fours: 0, sixes: 0, sr: 200.00 }
            ],
            extras: { total: 4, details: "(w 4)" },
            total: { score: "151", details: "(9 wkts, 20 ov)" },
            yetToBat: "Sandeep Sharma",
            fow: "33/1 (S. Samson, 3.5 ov) · 67/2 (R. Parag, 7.5 ov) · 68/3 (Y. Jaiswal, 8.4 ov) · 76/4 (W. Hasaranga, 9.3 ov) · 92/5 (N. Rana, 10.6 ov) · 110/6 (S. Dubey, 14.2 ov) · 131/7 (J. Archer, 16.1 ov) · 136/8 (N. Rana, 16.6 ov) · 144/9 (T. Deshpande, 18.5 ov)",
            bowling: [
                { name: "Spencer Johnson", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
                { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 33, wickets: 2, econ: 8.25 },
                { name: "Harshit Rana", overs: 4.0, maidens: 0, runs: 38, wickets: 2, econ: 9.00 },
                { name: "Moeen Ali", overs: 4.0, maidens: 0, runs: 23, wickets: 2, econ: 5.75 },
                { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 17, wickets: 2, econ: 4.25 }
            ]
        },
        innings2: {
            teamName: 'Knight Riders',
            batting: [
                { name: "Moeen Ali", out: "c & b Wanindu Hasaranga", runs: 5, balls: 12, fours: 0, sixes: 0, sr: 41.67 },
                { name: "Quinton de Kock (Wk)", out: "run out (Maheesh Theekshana)", runs: 97, balls: 61, fours: 8, sixes: 6, sr: 159.02 },
                { name: "Ajinkya Rahane (C)", out: "not out", runs: 18, balls: 15, fours: 1, sixes: 1, sr: 120.00 },
                { name: "Angkrish Raghuvanshi (P)", out: "not out", runs: 22, balls: 17, fours: 2, sixes: 0, sr: 129.41 }
            ],
            extras: { total: 11, details: "(w 9, lb 2)" },
            total: { score: "153", details: "(2 wkts, 17.3 ov)" },
            yetToBat: "Venkatesh Iyer, Rinku Singh, Andre Russell, Ramandeep Singh, Spencer Johnson, Vaibhav Arora, Harshit Rana, Varun Chakravarthy",
            fow: "4/1 (M. Ali, 6.1 ov) · 70/2 (A. Rahane, 10.1 ov)",
            bowling: [
                { name: "Jofra Archer", overs: 2.3, maidens: 0, runs: 33, wickets: 0, econ: 13.20 },
                { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 32, wickets: 0, econ: 8.00 },
                { name: "Riyan Parag (C)", overs: 4.0, maidens: 0, runs: 25, wickets: 0, econ: 6.25 },
                { name: "Sandeep Sharma", overs: 2.0, maidens: 0, runs: 11, wickets: 0, econ: 5.50 },
                { name: "Wanindu Hasaranga", overs: 3.0, maidens: 0, runs: 34, wickets: 1, econ: 11.33 },
                { name: "Nitish Rana", overs: 1.0, maidens: 0, runs: 9, wickets: 0, econ: 9.00 },
                { name: "Tushar Deshpande", overs: 1.0, maidens: 0, runs: 7, wickets: 0, econ: 7.00 }
            ]
        }
    },
    // Match 7 (index 6)
    {
        team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '190/9', overs: '20' },
        team2: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '193/5', overs: '16.1' },
        status: 'LSG won by 5 wickets (23 balls left)',
        toss: "LSG won the toss and decided to bowl",
        venue: "Rajiv Gandhi International Stadium",
        pom: "Nicholas Pooran", // Assuming based on performance
        innings1: {
            teamName: 'Sunrisers',
            batting: [
                { name: "Travis Head", out: "c & b Prince Yadav", runs: 49, balls: 29, fours: 5, sixes: 3, sr: 167.86 },
                { name: "Abdul Samad", out: "c Nicholas Pooran b Shardul Thakur", runs: 6, balls: 6, fours: 1, sixes: 0, sr: 100.00 },
                { name: "Ishan Kishan", out: "c & b Shardul Thakur", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Nitish Kumar Reddy", out: "", runs: 32, balls: 28, fours: 2, sixes: 0, sr: 114.29 },
                { name: "Heinrich Klaasen (Wk)", out: "run out (Prince Yadav)", runs: 28, balls: 17, fours: 2, sixes: 1, sr: 152.94 },
                { name: "Pat Cummins (C)", out: "c Mayank Yadav b Avesh Khan", runs: 18, balls: 4, fours: 0, sixes: 3, sr: 450.00 },
                { name: "Harshal Patel", out: "not out", runs: 12, balls: 11, fours: 0, sixes: 0, sr: 109.09 },
                { name: "Mohammed Shami", out: "c Ayush Badoni b Shardul Thakur", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 }
            ],
            extras: { total: 7, details: "(nb 1, w 4, lb 2)" },
            total: { score: "190", details: "(9 wkts, 20 ov)" },
            yetToBat: "Adam Zampa",
            fow: "15/1 (A. Sharma, 2.1 ov) · 15/2 (I. Kishan, 2.2 ov) · 76/3 (T. Head, 7.3 ov) · 119/4 (N.K. Reddy, 12.5 ov) · 166/5 (H. Klaasen, 16.1 ov) · 178/6 (A. Manohar, 16.2 ov) · 178/7 (P. Cummins, 17.3 ov) · 181/8 (M. Shami, 18.3 ov)",
            bowling: [
                { name: "Shardul Thakur", overs: 4.0, maidens: 0, runs: 34, wickets: 4, econ: 8.50 },
                { name: "Avesh Khan", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 11.25 },
                { name: "Digvesh Singh", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
                { name: "Ravi Bishnoi", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
                { name: "Prince Yadav", overs: 4.0, maidens: 0, runs: 29, wickets: 1, econ: 7.25 }
            ]
        },
        innings2: {
            teamName: 'Super Giants',
            batting: [
                { name: "Mitchell Marsh", out: "c Nitish Kumar Reddy b Pat Cummins", runs: 52, balls: 31, fours: 7, sixes: 2, sr: 167.74 },
                { name: "Aiden Markram", out: "c Pat Cummins b Mohammed Shami", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 },
                { name: "Nicholas Pooran", out: "not out", runs: 70, balls: 26, fours: 6, sixes: 6, sr: 269.23 },
                { name: "Rishabh Pant (C) (Wk)", out: "c Heinrich Klaasen b Harshal Patel", runs: 15, balls: 15, fours: 0, sixes: 1, sr: 100.00 },
                { name: "Ayush Badoni", out: "c Harshal Patel b Adam Zampa", runs: 6, balls: 6, fours: 1, sixes: 0, sr: 100.00 },
                { name: "David Miller", out: "not out", runs: 13, balls: 7, fours: 2, sixes: 0, sr: 185.71 },
                { name: "Abdul Samad", out: "not out", runs: 22, balls: 8, fours: 2, sixes: 2, sr: 275.00 }
            ],
            extras: { total: 14, details: "(w 13, lb 1)" },
            total: { score: "193", details: "(5 wkts, 16.1 ov)" },
            yetToBat: "Shardul Thakur, Prince Yadav, Ravi Bishnoi, Avesh Khan, Digvesh Singh",
            fow: "4/1 (A. Markram, 1.3 ov) · 120/2 (N. Pooran, 8.4 ov) · 138/3 (M. Marsh, 10.5 ov) · 154/4 (R. Pant, 12.3 ov) · 162/5 (A. Badoni, 14.1 ov)",
            bowling: [
                { name: "Abhishek Sharma", overs: 2.0, maidens: 0, runs: 20, wickets: 0, econ: 10.00 },
                { name: "Mohammed Shami", overs: 3.0, maidens: 0, runs: 37, wickets: 1, econ: 12.33 },
                { name: "Simarjeet Singh", overs: 2.0, maidens: 0, runs: 28, wickets: 0, econ: 14.00 },
                { name: "Pat Cummins (C)", overs: 3.0, maidens: 0, runs: 28, wickets: 2, econ: 9.67 },
                { name: "Adam Zampa", overs: 4.0, maidens: 0, runs: 46, wickets: 1, econ: 11.50 },
                { name: "Harshal Patel", overs: 2.0, maidens: 0, runs: 28, wickets: 1, econ: 14.00 },
                { name: "Ishan Kishan", overs: 0.1, maidens: 0, runs: 4, wickets: 0, econ: 24.00 }
            ]
        }
    },
    // Match 8 (index 7)
    {
        team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '196/7', overs: '20' },
        team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '146/8', overs: '20' },
        status: 'RCB won by 50 runs',
        toss: "CSK won the toss and decided to bowl",
        venue: "MA Chidambaram Stadium",
        pom: "Rajat Patidar", // Assuming based on performance
        innings1: {
            teamName: 'Royal Challengers',
            batting: [
                { name: "Phil Salt", out: "c MS Dhoni b Noor Ahmad", runs: 12, balls: 6, fours: 3, sixes: 0, sr: 200.00 },
                { name: "Virat Kohli", out: "c Ravindra Jadeja b Noor Ahmad", runs: 31, balls: 30, fours: 2, sixes: 1, sr: 103.33 },
                { name: "Devdutt Padikkal", out: "c Gaikwad b Ravichandran Ashwin", runs: 27, balls: 14, fours: 2, sixes: 2, sr: 192.86 },
                { name: "Rajat Patidar (C)", out: "c & b Matheesha Pathirana", runs: 51, balls: 32, fours: 4, sixes: 3, sr: 159.38 },
                { name: "Liam Livingstone", out: "c & b Noor Ahmad", runs: 10, balls: 9, fours: 0, sixes: 1, sr: 111.11 },
                { name: "Jitesh Sharma (Wk)", out: "c Gaikwad b Khaleel Ahmed", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.00 },
                { name: "Tim David", out: "c & b Jadeja", runs: 22, balls: 8, fours: 1, sixes: 3, sr: 275.00 },
                { name: "Krunal Pandya", out: "c & b Matheesha Pathirana", runs: 0, balls: 3, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Bhuvneshwar Kumar", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
            ],
            extras: { total: 11, details: "(w 8, lb 3)" },
            total: { score: "196", details: "(7 wkts, 20 ov)" },
            yetToBat: "Josh Hazlewood, Yash Dayal, Suyash Sharma",
            fow: "45/1 (P. Salt, 4.6 ov) · 76/2 (D. Padikkal, 7.5 ov) · 117/3 (V. Kohli, 12.2 ov) · 145/4 (L. Livingstone, 15.3 ov) · 172/5 (J. Sharma, 17.4 ov) · 176/6 (R. Patidar, 18.1 ov) · 177/7 (K. Pandya, 18.2 ov)",
            bowling: [
                { name: "Khaleel Ahmed", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 7.00 },
                { name: "Ravichandran Ashwin", overs: 2.0, maidens: 0, runs: 22, wickets: 1, econ: 11.00 },
                { name: "Sam Curran", overs: 3.0, maidens: 0, runs: 34, wickets: 0, econ: 11.33 },
                { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 36, wickets: 3, econ: 9.00 },
                { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 37, wickets: 0, econ: 12.33 },
                { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 36, wickets: 2, econ: 9.00 }
            ]
        },
        innings2: {
            teamName: 'Super Kings',
            batting: [
                { name: "Rachin Ravindra", out: "c & b Yash Dayal", runs: 21, balls: 13, fours: 5, sixes: 0, sr: 138.46 },
                { name: "Rahul Tripathi", out: "c Phil Salt b Josh Hazlewood", runs: 5, balls: 3, fours: 1, sixes: 0, sr: 166.67 },
                { name: "Ruturaj Gaikwad (C)", out: "not out", runs: 0, balls: 4, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Deepak Hooda", out: "c Rajat Patidar b Bhuvneshwar Kumar", runs: 4, balls: 9, fours: 1, sixes: 0, sr: 44.44 },
                { name: "Sam Curran", out: "c Krunal Pandya b Liam Livingstone", runs: 8, balls: 13, fours: 0, sixes: 0, sr: 61.54 },
                { name: "Ravindra Jadeja", out: "c & b Yash Dayal", runs: 19, balls: 15, fours: 2, sixes: 1, sr: 126.67 },
                { name: "Ravichandran Ashwin", out: "c Jitesh Sharma b Josh Hazlewood", runs: 11, balls: 8, fours: 1, sixes: 0, sr: 137.50 },
                { name: "MS Dhoni (Wk)", out: "not out", runs: 30, balls: 16, fours: 3, sixes: 2, sr: 187.50 },
                { name: "Noor Ahmad", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
            ],
            extras: { total: 3, details: "(w 2, b 1)" },
            total: { score: "146", details: "(8 wkts, 20 ov)" },
            yetToBat: "Khaleel Ahmed, Matheesha Pathirana",
            fow: "6/1 (R. Tripathi, 1.2 ov) · 8/2 (R. Gaikwad, 1.6 ov) · 25/3 (D. Hooda, 4.4 ov) · 53/4 (S. Curran, 8.5 ov) · 75/5 (R. Ravindra, 12.1 ov) · 80/6 (S. Dube, 12.5 ov) · 96/7 (R. Ashwin, 15.2 ov) · 135/8 (W. Jacks, 18.4 ov)",
            bowling: [
                { name: "Bhuvneshwar Kumar", overs: 3.0, maidens: 0, runs: 20, wickets: 1, econ: 6.67 },
                { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 21, wickets: 3, econ: 5.25 },
                { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 18, wickets: 2, econ: 6.00 },
                { name: "Liam Livingstone", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
                { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 32, wickets: 0, econ: 8.00 },
                { name: "Krunal Pandya", overs: 2.0, maidens: 0, runs: 26, wickets: 0, econ: 13.00 }
            ]
        }
    },
    // Match 9 (index 8)
    {
        team1: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '196/8', overs: '20' },
        team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '160/6', overs: '20' },
        status: 'GT won by 36 runs',
        toss: "MI won the toss and decided to bowl",
        venue: "Narendra Modi Stadium",
        pom: "Sai Sudharsan",
        innings1: {
            teamName: 'Titans',
            batting: [
                { name: "Sai Sudharsan", out: "c & b Trent Boult", runs: 63, balls: 41, fours: 5, sixes: 2, sr: 153.66 },
                { name: "Shubman Gill (C)", out: "c Naman Dhir b Hardik Pandya", runs: 38, balls: 27, fours: 4, sixes: 1, sr: 140.74 },
                { name: "Jos Buttler (Wk)", out: "c Rohit Sharma b Mujeeb Ur Rahman", runs: 39, balls: 24, fours: 5, sixes: 1, sr: 162.50 },
                { name: "Shahrukh Khan", out: "c Robin Minz b Hardik Pandya", runs: 9, balls: 7, fours: 0, sixes: 1, sr: 128.57 },
                { name: "Sherfane Rutherford", out: "c Mitchell Santner b Deepak Chahar", runs: 18, balls: 11, fours: 0, sixes: 2, sr: 163.64 },
                { name: "Rahul Tewatia", out: "run out (Hardik Pandya)", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Rashid Khan", out: "c Rohit Sharma b Satyanarayana Raju", runs: 6, balls: 4, fours: 0, sixes: 1, sr: 150.00 },
                { name: "Kagiso Rabada", out: "not out", runs: 7, balls: 5, fours: 0, sixes: 1, sr: 140.00 },
                { name: "Sai Kishore", out: "run out (Ryan Rickelton)", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 15, details: "(w 14, b 1)" },
            total: { score: "196", details: "(8 wkts, 20 ov)" },
            yetToBat: "Mohammed Siraj, Prasidh Krishna, Ishant Sharma (IP)",
            fow: "79/1 (S. Gill, 8.3 ov) · 129/2 (J. Buttler, 13.5 ov) · 146/3 (S. Khan, 15.3 ov) · 179/4 (S. Sudharsan, 18.2 ov) · 182/5 (S. Rutherford, 18.5 ov) · 182/6 (R. Tewatia, 18.5 ov) · 194/7 (R. Khan, 19.4 ov) · 196/8 (R. Sai Kishore, 19.6 ov)",
            bowling: [
                { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 34, wickets: 1, econ: 8.50 },
                { name: "Deepak Chahar", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
                { name: "Mujeeb Ur Rahman", overs: 2.0, maidens: 0, runs: 28, wickets: 1, econ: 14.00 },
                { name: "Hardik Pandya (C)", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.25 },
                { name: "Mitchell Santner", overs: 3.0, maidens: 0, runs: 25, wickets: 0, econ: 8.33 },
                { name: "Satyanarayana Raju", overs: 3.0, maidens: 0, runs: 40, wickets: 1, econ: 13.33 }
            ]
        },
        innings2: {
            teamName: 'Indians',
            batting: [
                { name: "Rohit Sharma", out: "c Mohammed Siraj b Rashid Khan", runs: 8, balls: 4, fours: 2, sixes: 0, sr: 200.00 },
                { name: "Ryan Rickelton (Wk)", out: "c Mohammed Siraj b Mohammed Siraj", runs: 6, balls: 9, fours: 1, sixes: 0, sr: 66.67 },
                { name: "Tilak Varma", out: "c Kagiso Rabada b Prasidh Krishna", runs: 39, balls: 36, fours: 3, sixes: 1, sr: 108.33 },
                { name: "Suryakumar Yadav", out: "c Kagiso Rabada b Prasidh Krishna", runs: 48, balls: 28, fours: 1, sixes: 4, sr: 171.43 },
                { name: "Robin Minz", out: "c Ishant Sharma b Sai Kishore", runs: 3, balls: 6, fours: 0, sixes: 0, sr: 50.00 },
                { name: "Hardik Pandya (C)", out: "c Rahul Tewatia b Kagiso Rabada", runs: 11, balls: 17, fours: 1, sixes: 0, sr: 64.71 },
                { name: "Naman Dhir", out: "run out", runs: 18, balls: 11, fours: 3, sixes: 0, sr: 163.64 },
                { name: "Mitchell Santner", out: "not out", runs: 18, balls: 9, fours: 1, sixes: 2, sr: 200.00 }
            ],
            extras: { total: 9, details: "(w 7, lb 2)" },
            total: { score: "160", details: "(6 wkts, 20 ov)" },
            yetToBat: "Deepak Chahar, Trent Boult, Mujeeb Ur Rahman, Satyanarayana Raju",
            fow: "12/1 (Rohit, 1.4 ov) · 24/2 (R. Rickelton, 4.3 ov) · 97/3 (T. Varma, 11.3 ov) · 108/4 (R. Minz, 12.6 ov) · 120/5 (S. Yadav, 15.5 ov) · 124/6 (H. Pandya, 16.6 ov)",
            bowling: [
                { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 34, wickets: 2, econ: 8.50 },
                { name: "Kagiso Rabada", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
                { name: "Ishant Sharma (P)", overs: 2.0, maidens: 0, runs: 17, wickets: 0, econ: 8.50 },
                { name: "Rashid Khan", overs: 2.0, maidens: 0, runs: 10, wickets: 0, econ: 5.00 },
                { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
                { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 18, wickets: 2, econ: 4.50 }
            ]
        }
    },
    // Match 10 (index 9)
    {
        team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '163', overs: '(18.4)' },
        team2: { name: 'DC', logo: 'Logos/dc_logo.png', score: '166/3', overs: '(16)' },
        status: 'DC won by 7 wickets (24 balls left)',
        toss: "SRH won the toss and decided to bat",
        venue: "ACA-VDCA Cricket Stadium",
        pom: "Aniket Verma", // Assuming based on performance
        innings1: {
            teamName: 'Sunrisers',
            batting: [
                { name: "Abhishek Sharma", out: "run out (Vipraj Nigam)", runs: 2, balls: 8, fours: 0, sixes: 0, sr: 100.00 },
                { name: "Travis Head", out: "c KL Rahul b Mitchell Starc", runs: 22, balls: 12, fours: 4, sixes: 0, sr: 183.33 },
                { name: "Ishan Kishan", out: "c Abishek Porel b Mitchell Starc", runs: 2, balls: 5, fours: 0, sixes: 0, sr: 40.00 },
                { name: "Nitish Kumar Reddy", out: "c KL Rahul b Mitchell Starc", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Aniket Verma", out: "not out", runs: 74, balls: 41, fours: 5, sixes: 6, sr: 180.49 },
                { name: "Heinrich Klaasen (Wk)", out: "c Vipraj Nigam b Mohit Sharma", runs: 32, balls: 19, fours: 2, sixes: 2, sr: 168.42 },
                { name: "Abhinav Manohar", out: "run out", runs: 4, balls: 8, fours: 0, sixes: 0, sr: 86.67 },
                { name: "Pat Cummins (C)", out: "c & b Kuldeep Yadav", runs: 2, balls: 7, fours: 0, sixes: 0, sr: 28.57 },
                { name: "Wiaan Mulder", out: "c Faf du Plessis b Mitchell Starc", runs: 9, balls: 11, fours: 1, sixes: 0, sr: 81.82 },
                { name: "Harshal Patel", out: "c Axar Patel b Mitchell Starc", runs: 5, balls: 9, fours: 0, sixes: 0, sr: 55.56 },
                { name: "Mohammed Shami", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 11, details: "(nb 2, w 9)" },
            total: { score: "163", details: "(10 wkts, 18.4 ov)" },
            yetToBat: "Zeeshan Ansari",
            fow: "11/1 (A. Sharma, 0.5 ov) · 20/2 (I. Kishan, 2.1 ov) · 20/3 (N. K. Reddy, 2.3 ov) · 37/4 (T. Head, 3.5 ov) · 119/5 (H. Klaasen, 11.5 ov) · 130/6 (A. Manohar, 13.2 ov) · 134/7 (P. Cummins, 13.6 ov) · 148/8 (A. Verma, 15.6 ov) · 162/9 (H. Patel, 18.2 ov) · 163/10 (W. Mulder, 18.4 ov)",
            bowling: [
                { name: "Mitchell Starc", overs: 3.4, maidens: 0, runs: 35, wickets: 5, econ: 9.55 },
                { name: "Mukesh Kumar", overs: 2.0, maidens: 0, runs: 17, wickets: 0, econ: 8.50 },
                { name: "Axar Patel (C)", overs: 4.0, maidens: 0, runs: 43, wickets: 0, econ: 10.75 },
                { name: "Vipraj Nigam", overs: 2.0, maidens: 0, runs: 21, wickets: 1, econ: 10.50 },
                { name: "Mohit Sharma", overs: 3.0, maidens: 0, runs: 25, wickets: 1, econ: 8.33 },
                { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 22, wickets: 3, econ: 5.50 }
            ]
        },
        innings2: {
            teamName: 'Capitals',
            batting: [
                { name: "Jake Fraser-McGurk", out: "c & b Zeeshan Ansari", runs: 58, balls: 27, fours: 6, sixes: 4, sr: 118.75 },
                { name: "Faf du Plessis", out: "c Wiaan Mulder b Zeeshan Ansari", runs: 56, balls: 27, fours: 3, sixes: 3, sr: 189.19 },
                { name: "Abishek Porel", out: "not out", runs: 34, balls: 18, fours: 2, sixes: 2, sr: 188.89 },
                { name: "KL Rahul (Wk)", out: "c & b Harshal Patel", runs: 15, balls: 5, fours: 2, sixes: 1, sr: 300.00 },
                { name: "Tristan Stubbs", out: "not out", runs: 21, balls: 14, fours: 3, sixes: 0, sr: 150.00 }
            ],
            extras: { total: 8, details: "(w 2, b 2, lb 4)" },
            total: { score: "166", details: "(3 wkts, 16 ov)" },
            yetToBat: "Axar Patel (C), Vipraj Nigam, Mitchell Starc, Kuldeep Yadav, Mohit Sharma, Mukesh Kumar",
            fow: "81/1 (F. du Plessis, 9.1 ov) · 96/2 (J. Fraser-McGurk, 9.6 ov) · 113/3 (KL Rahul, 11.2 ov)",
            bowling: [
                { name: "Mohammed Shami", overs: 3.0, maidens: 0, runs: 31, wickets: 0, econ: 10.33 },
                { name: "Abhishek Sharma", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 },
                { name: "Pat Cummins (C)", overs: 2.0, maidens: 0, runs: 27, wickets: 0, econ: 13.50 },
                { name: "Harshal Patel", overs: 3.0, maidens: 0, runs: 17, wickets: 0, econ: 5.67 },
                { name: "Zeeshan Ansari", overs: 4.0, maidens: 0, runs: 42, wickets: 3, econ: 10.50 },
                { name: "Wiaan Mulder", overs: 1.0, maidens: 0, runs: 16, wickets: 0, econ: 16.00 }
            ]
        }
    },
    // Match 11 (index 10)
    {
        team1: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '182/6', overs: '20' },
        team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '176/6', overs: '20' },
        status: 'RR won by 6 runs',
        toss: "CSK won the toss and decided to bowl",
        venue: "Barsapara Stadium",
        pom: "Nitish Rana", // Assuming based on performance
        innings1: {
            teamName: 'Royals',
            batting: [
                { name: "Yashasvi Jaiswal", out: "c Rachin Ravindra b Khaleel Ahmed", runs: 4, balls: 3, fours: 1, sixes: 0, sr: 133.33 },
                { name: "Sanju Samson", out: "c Rachin Ravindra b Noor Ahmad", runs: 26, balls: 16, fours: 1, sixes: 1, sr: 125.00 },
                { name: "Nitish Rana", out: "c Ruturaj Gaikwad b Ravichandran Ashwin", runs: 81, balls: 36, fours: 10, sixes: 5, sr: 225.00 },
                { name: "Riyan Parag (C)", out: "c & b Ravindra Jadeja", runs: 37, balls: 28, fours: 2, sixes: 2, sr: 132.14 },
                { name: "Dhruv Jurel (Wk)", out: "c Maheesh Theekshana b Noor Ahmad", runs: 3, balls: 7, fours: 0, sixes: 0, sr: 42.86 },
                { name: "Wanindu Hasaranga", out: "c Vijay Shankar b Ravindra Jadeja", runs: 4, balls: 5, fours: 0, sixes: 0, sr: 80.00 },
                { name: "Shimron Hetmyer", out: "c Ruturaj Gaikwad b Matheesha Pathirana", runs: 19, balls: 16, fours: 1, sixes: 1, sr: 118.75 },
                { name: "Jofra Archer", out: "c Ruturaj Gaikwad b Khaleel Ahmed", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Kumar Kartikeya", out: "run out (Khaleel Ahmed)", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 },
                { name: "Maheesh Theekshana", out: "not out", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
                { name: "Tushar Deshpande", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
            ],
            extras: { total: 10, details: "(w 8, b 2)" },
            total: { score: "182", details: "(9 wkts, 20 ov)" },
            yetToBat: "Sandeep Sharma",
            fow: "4/1 (Y. Jaiswal, 0.3 ov) · 66/2 (S. Samson, 7.3 ov) · 124/3 (N. Rana, 11.3 ov) · 134/4 (D. Jurel, 13.1 ov) · 143/5 (R. Parag, 14.6 ov) · 170/6 (W. Hasaranga, 17.2 ov) · 174/7 (J. Archer, 18.3 ov) · 175/8 (K. Kartikeya, 18.5 ov) · 176/9 (S. Hetmyer, 19.1 ov)",
            bowling: [
                { name: "Khaleel Ahmed", overs: 4.0, maidens: 0, runs: 38, wickets: 2, econ: 9.50 },
                { name: "Jamie Overton", overs: 2.0, maidens: 0, runs: 30, wickets: 0, econ: 15.00 },
                { name: "Ravichandran Ashwin", overs: 4.0, maidens: 0, runs: 46, wickets: 1, econ: 11.50 },
                { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
                { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
                { name: "Ravindra Jadeja", overs: 2.0, maidens: 0, runs: 10, wickets: 1, econ: 5.00 }
            ]
        },
        innings2: {
            teamName: 'Super Kings',
            batting: [
                { name: "Rachin Ravindra", out: "c Dhruv Jurel b Jofra Archer", runs: 4, balls: 6, fours: 0, sixes: 0, sr: 66.67 },
                { name: "Rahul Tripathi", out: "c Shimron Hetmyer b Wanindu Hasaranga", runs: 23, balls: 19, fours: 3, sixes: 1, sr: 121.05 },
                { name: "Ruturaj Gaikwad (C)", out: "not out", runs: 83, balls: 44, fours: 7, sixes: 1, sr: 143.18 },
                { name: "Shivam Dube", out: "c Riyan Parag b Wanindu Hasaranga", runs: 18, balls: 10, fours: 1, sixes: 2, sr: 180.00 },
                { name: "Vijay Shankar", out: "c & b Wanindu Hasaranga", runs: 9, balls: 6, fours: 0, sixes: 1, sr: 150.00 },
                { name: "Ravindra Jadeja", out: "not out", runs: 22, balls: 22, fours: 2, sixes: 1, sr: 145.45 },
                { name: "MS Dhoni (Wk)", out: "c Shimron Hetmyer b Sandeep Sharma", runs: 18, balls: 11, fours: 1, sixes: 1, sr: 145.45 },
                { name: "Jamie Overton", out: "not out", runs: 11, balls: 4, fours: 0, sixes: 1, sr: 275.00 }
            ],
            extras: { total: 4, details: "(w 3, lb 1)" },
            total: { score: "176", details: "(6 wkts, 20 ov)" },
            yetToBat: "Ravichandran Ashwin, Noor Ahmad, Khaleel Ahmed, Matheesha Pathirana",
            fow: "9/1 (R. Ravindra, 0.4 ov) · 48/2 (R. Tripathi, 7.1 ov) · 72/3 (S. Dube, 9.3 ov) · 92/4 (V. Shankar, 11.5 ov) · 129/5 (R. Gaikwad, 15.3 ov) · 164/6 (MS Dhoni, 19.1 ov)",
            bowling: [
                { name: "Jofra Archer", overs: 3.0, maidens: 0, runs: 13, wickets: 1, econ: 4.33 },
                { name: "Tushar Deshpande", overs: 4.0, maidens: 0, runs: 45, wickets: 0, econ: 11.25 },
                { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
                { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 30, wickets: 0, econ: 7.50 },
                { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 35, wickets: 4, econ: 8.75 },
                { name: "Kumar Kartikeya", overs: 1.0, maidens: 0, runs: 10, wickets: 0, econ: 10.00 }
            ]
        }
    },
    // Match 12 (index 11)
    {
        team1: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '116', overs: '(16.2)' },
        team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '121/2', overs: '(12.5)' },
        status: 'MI won by 8 wickets (43 balls left)',
        toss: "MI won the toss and decided to bowl",
        venue: "Wankhede Stadium",
        pom: "Ryan Rickelton", // Assuming based on performance
        innings1: {
            teamName: 'Knight Riders',
            batting: [
                { name: "Quinton de Kock (Wk)", out: "c Rohit Sharma b Deepak Chahar", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
                { name: "Sunil Narine", out: "b Trent Boult", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Ajinkya Rahane (C)", out: "c Ryan Rickelton b Vignesh Puthur", runs: 11, balls: 7, fours: 1, sixes: 1, sr: 157.14 },
                { name: "Angkrish Raghuvanshi", out: "c Suryakumar Yadav b Hardik Pandya", runs: 26, balls: 16, fours: 3, sixes: 1, sr: 162.50 },
                { name: "Venkatesh Iyer", out: "c Ryan Rickelton b Deepak Chahar", runs: 3, balls: 9, fours: 0, sixes: 0, sr: 33.33 },
                { name: "Rinku Singh", out: "c Suryakumar Yadav b Ashwani Kumar", runs: 17, balls: 14, fours: 1, sixes: 1, sr: 121.43 },
                { name: "Manish Pandey (IP)", out: "run out", runs: 19, balls: 14, fours: 2, sixes: 1, sr: 135.71 },
                { name: "Andre Russell", out: "c & b Ashwani Kumar", runs: 5, balls: 11, fours: 1, sixes: 0, sr: 45.45 },
                { name: "Ramandeep Singh", out: "c Rohit Sharma b Mitchell Santner", runs: 22, balls: 12, fours: 1, sixes: 2, sr: 183.33 },
                { name: "Harshit Rana", out: "c & b Vignesh Puthur", runs: 4, balls: 8, fours: 0, sixes: 0, sr: 50.00 },
                { name: "Spencer Johnson", out: "not out", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 }
            ],
            extras: { total: 7, details: "(nb 1, w 4, lb 2)" },
            total: { score: "116", details: "(10 wkts, 16.2 ov)" },
            yetToBat: "Varun Chakravarthy",
            fow: "1/1 (S. Narine, 0.4 ov) · 2/2 (Q. de Kock, 1.1 ov) · 25/3 (A. Rahane, 3.1 ov) · 41/4 (V. Iyer, 5.1 ov) · 56/5 (A. Raghuvanshi, 6.6 ov) · 80/6 (R. Singh, 10.6 ov) · 88/7 (M. Pandey, 12.4 ov) · 99/8 (A. Russell, 14.3 ov) · 116/9 (H. Rana, 16.2 ov) · 116/10 (R. Singh, 16.2 ov)",
            bowling: [
                { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 23, wickets: 1, econ: 5.75 },
                { name: "Deepak Chahar", overs: 2.0, maidens: 0, runs: 19, wickets: 2, econ: 9.50 },
                { name: "Ashwani Kumar", overs: 3.0, maidens: 0, runs: 24, wickets: 4, econ: 8.00 },
                { name: "Hardik Pandya (C)", overs: 2.0, maidens: 0, runs: 10, wickets: 1, econ: 5.00 },
                { name: "Vignesh Puthur", overs: 2.0, maidens: 0, runs: 21, wickets: 1, econ: 10.50 },
                { name: "Mitchell Santner", overs: 3.2, maidens: 0, runs: 17, wickets: 1, econ: 5.10 }
            ]
        },
        innings2: {
            teamName: 'Indians',
            batting: [
                { name: "Rohit Sharma (IP)", out: "c Harshit Rana b Andre Russell", runs: 13, balls: 12, fours: 0, sixes: 1, sr: 108.33 },
                { name: "Ryan Rickelton (Wk)", out: "not out", runs: 62, balls: 41, fours: 4, sixes: 5, sr: 151.22 },
                { name: "Will Jacks", out: "c Ajinkya Rahane b Andre Russell", runs: 16, balls: 17, fours: 0, sixes: 1, sr: 94.12 },
                { name: "Suryakumar Yadav", out: "not out", runs: 27, balls: 9, fours: 3, sixes: 2, sr: 300.00 }
            ],
            extras: { total: 3, details: "(nb 2, w 1)" },
            total: { score: "121", details: "(2 wkts, 12.5 ov)" },
            yetToBat: "Tilak Varma, Hardik Pandya (C), Naman Dhir, Mitchell Santner, Deepak Chahar, Trent Boult, Ashwani Kumar, Vignesh Puthur",
            fow: "46/1 (Rohit, 5.2 ov) · 91/2 (W. Jacks, 10.4 ov)",
            bowling: [
                { name: "Spencer Johnson", overs: 2.0, maidens: 0, runs: 14, wickets: 0, econ: 7.00 },
                { name: "Harshit Rana", overs: 2.0, maidens: 0, runs: 28, wickets: 0, econ: 14.00 },
                { name: "Varun Chakravarthy", overs: 3.0, maidens: 0, runs: 12, wickets: 0, econ: 4.00 },
                { name: "Andre Russell", overs: 2.5, maidens: 0, runs: 35, wickets: 2, econ: 12.35 },
                { name: "Sunil Narine", overs: 3.0, maidens: 0, runs: 32, wickets: 0, econ: 10.67 }
            ]
        }
    },
    // Match 13 (index 12)
    {
        team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '171/7', overs: '20' },
        team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '177/2', overs: '16.2' },
        status: 'PBKS won by 8 wickets (22 balls left)',
        toss: "PBKS won the toss and decided to bowl",
        venue: "Ekana Cricket Stadium",
        pom: "Prabhsimran Singh", // Assuming based on performance
        innings1: {
            teamName: 'Super Giants',
            batting: [
                { name: "Aiden Markram", out: "b Lockie Ferguson", runs: 28, balls: 18, fours: 5, sixes: 1, sr: 155.56 },
                { name: "Mitchell Marsh", out: "c Marcus Stoinis b Arshdeep Singh", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Nicholas Pooran", out: "c Nehal Wadhera b Yuzvendra Chahal", runs: 44, balls: 30, fours: 5, sixes: 2, sr: 146.67 },
                { name: "Rishabh Pant (C)(Wk)", out: "c Marcus Stoinis b Glenn Maxwell", runs: 2, balls: 5, fours: 0, sixes: 0, sr: 40.00 },
                { name: "Ayush Badoni", out: "c Glenn Maxwell b Arshdeep Singh", runs: 41, balls: 33, fours: 1, sixes: 3, sr: 124.24 },
                { name: "David Miller", out: "c Priyansh Arya b Marco Jansen", runs: 19, balls: 18, fours: 3, sixes: 0, sr: 105.56 },
                { name: "Abdul Samad", out: "c Nehal Wadhera b Arshdeep Singh", runs: 27, balls: 12, fours: 2, sixes: 2, sr: 225.00 },
                { name: "Shardul Thakur", out: "not out", runs: 3, balls: 3, fours: 0, sixes: 0, sr: 100.00 },
                { name: "Arshad Khan", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 }
            ],
            extras: { total: 7, details: "(w 6, lb 1)" },
            total: { score: "171", details: "(7 wkts, 20 ov)" },
            yetToBat: "Digvesh Singh, Ravi Bishnoi, M Siddharth (IP)",
            fow: "1/1 (M. Marsh, 0.4 ov) · 32/2 (A. Markram, 3.5 ov) · 36/3 (R. Pant, 4.5 ov) · 46/4 (N. Pooran, 6.2 ov) · 113/5 (A. Badoni, 14.2 ov) · 153/6 (D. Miller, 18.2 ov) · 167/7 (A. Samad, 19.4 ov)",
            bowling: [
                { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 43, wickets: 3, econ: 10.75 },
                { name: "Lockie Ferguson", overs: 3.0, maidens: 0, runs: 26, wickets: 1, econ: 8.67 },
                { name: "Glenn Maxwell", overs: 3.0, maidens: 0, runs: 22, wickets: 1, econ: 7.33 },
                { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 7.00 },
                { name: "Marcus Stoinis", overs: 2.0, maidens: 0, runs: 15, wickets: 0, econ: 7.50 },
                { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 }
            ]
        },
        innings2: {
            teamName: 'Kings',
            batting: [
                { name: "Priyansh Arya", out: "c Shardul Thakur b Digvesh Singh", runs: 8, balls: 9, fours: 1, sixes: 0, sr: 88.89 },
                { name: "Prabhsimran Singh (Wk)", out: "c Ayush Badoni b Digvesh Singh", runs: 89, balls: 34, fours: 9, sixes: 3, sr: 261.76 },
                { name: "Shreyas Iyer (C)", out: "not out", runs: 52, balls: 30, fours: 3, sixes: 4, sr: 173.33 },
                { name: "Nehal Wadhera (IP)", out: "not out", runs: 43, balls: 25, fours: 3, sixes: 4, sr: 172.00 }
            ],
            extras: { total: 5, details: "(w 4, lb 1)" },
            total: { score: "177", details: "(2 wkts, 16.2 ov)" },
            yetToBat: "Glenn Maxwell, Marcus Stoinis, Shashank Singh, Suryansh Shedge, Marco Jansen, Lockie Ferguson, Arshdeep Singh, Yuzvendra Chahal",
            fow: "26/1 (P. Arya, 2.5 ov) · 110/2 (P. Singh, 10.1 ov)",
            bowling: [
                { name: "Shardul Thakur", overs: 3.0, maidens: 0, runs: 39, wickets: 0, econ: 13.00 },
                { name: "Avesh Khan", overs: 3.0, maidens: 0, runs: 30, wickets: 0, econ: 10.00 },
                { name: "Digvesh Singh", overs: 4.0, maidens: 0, runs: 30, wickets: 2, econ: 7.50 },
                { name: "Ravi Bishnoi", overs: 3.0, maidens: 0, runs: 43, wickets: 0, econ: 14.33 },
                { name: "M Siddharth (IP)", overs: 3.0, maidens: 0, runs: 28, wickets: 0, econ: 9.33 },
                { name: "Abdul Samad", overs: 0.2, maidens: 0, runs: 6, wickets: 0, econ: 18.00 }
            ]
        }
    },
    // Match 14 (index 13)
    {
        team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '169/8', overs: '20' },
        team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '170/2', overs: '17.5' },
        status: 'GT won by 8 wickets (13 balls left)',
        toss: "GT won the toss and decided to bowl",
        venue: "M. Chinnaswamy Stadium",
        pom: "Jos Buttler", // Assuming based on performance
        innings1: {
            teamName: 'Royal Challengers',
            batting: [
                { name: "Phil Salt", out: "c Mohammed Siraj b Mohammed Siraj", runs: 14, balls: 13, fours: 1, sixes: 1, sr: 107.69 },
                { name: "Virat Kohli", out: "c Prasidh Krishna b Arshad Khan", runs: 7, balls: 8, fours: 1, sixes: 0, sr: 116.67 },
                { name: "Devdutt Padikkal", out: "not out", runs: 4, balls: 3, fours: 1, sixes: 0, sr: 133.33 },
                { name: "Rajat Patidar (C)", out: "run out", runs: 12, balls: 12, fours: 2, sixes: 0, sr: 100.00 },
                { name: "Liam Livingstone", out: "not out", runs: 54, balls: 40, fours: 1, sixes: 5, sr: 135.00 },
                { name: "Jitesh Sharma (Wk)", out: "c Jos Buttler b Mohammed Siraj", runs: 33, balls: 21, fours: 5, sixes: 1, sr: 157.14 },
                { name: "Tim David", out: "c & b Prasidh Krishna", runs: 32, balls: 18, fours: 2, sixes: 3, sr: 177.78 },
                { name: "Bhuvneshwar Kumar", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
            ],
            extras: { total: 7, details: "(w 3, lb 4)" },
            total: { score: "169", details: "(8 wkts, 20 ov)" },
            yetToBat: "Josh Hazlewood, Yash Dayal, Rasikh Salam Dar",
            fow: "8/1 (V. Kohli, 1.4 ov) · 13/2 (D. Padikkal, 2.2 ov) · 35/3 (P. Salt, 4.4 ov) · 42/4 (R. Patidar, 6.2 ov) · 94/5 (J. Sharma, 12.4 ov) · 104/6 (K. Pandya, 14.2 ov) · 130/7 (L. Livingstone, 16.5 ov) · 168/8 (T. David, 19.2 ov)",
            bowling: [
                { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 19, wickets: 3, econ: 4.75 },
                { name: "Arshad Khan", overs: 2.0, maidens: 0, runs: 17, wickets: 1, econ: 8.50 },
                { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 26, wickets: 1, econ: 6.50 },
                { name: "Ishant Sharma", overs: 2.0, maidens: 0, runs: 27, wickets: 1, econ: 13.50 },
                { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 22, wickets: 2, econ: 5.50 },
                { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 54, wickets: 0, econ: 13.50 }
            ]
        },
        innings2: {
            teamName: 'Titans',
            batting: [
                { name: "Sai Sudharsan", out: "c Jitesh Sharma b Josh Hazlewood", runs: 51, balls: 38, fours: 7, sixes: 1, sr: 136.11 },
                { name: "Shubman Gill (C)", out: "c Liam Livingstone b Bhuvneshwar Kumar", runs: 14, balls: 14, fours: 1, sixes: 1, sr: 100.00 },
                { name: "Jos Buttler (Wk)", out: "not out", runs: 73, balls: 39, fours: 5, sixes: 6, sr: 187.18 },
                { name: "Sherfane Rutherford", out: "not out", runs: 30, balls: 18, fours: 1, sixes: 3, sr: 166.67 }
            ],
            extras: { total: 4, details: "(w 1, lb 3)" },
            total: { score: "170", details: "(2 wkts, 17.5 ov)" },
            yetToBat: "Shahrukh Khan, Rahul Tewatia, Arshad Khan, Rashid Khan, Sai Kishore, Mohammed Siraj, Prasidh Krishna, Ishant Sharma",
            fow: "32/1 (S. Gill, 4.4 ov) · 107/2 (S. Sudharsan, 12.3 ov)",
            bowling: [
                { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 23, wickets: 1, econ: 5.75 },
                { name: "Josh Hazlewood", overs: 3.5, maidens: 0, runs: 43, wickets: 1, econ: 11.22 },
                { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 20, wickets: 0, econ: 6.67 },
                { name: "Rasikh Salam Dar", overs: 3.0, maidens: 0, runs: 35, wickets: 0, econ: 11.67 },
                { name: "Krunal Pandya", overs: 3.0, maidens: 0, runs: 34, wickets: 0, econ: 11.33 },
                { name: "Liam Livingstone", overs: 1.0, maidens: 0, runs: 12, wickets: 0, econ: 12.00 }
            ]
        }
    },
    // Match 15 (index 14)
    {
        team1: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '200/6', overs: '20' },
        team2: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '120', overs: '(16.4)' },
        status: 'KKR won by 80 runs',
        toss: "SRH won the toss and decided to bowl",
        venue: "Eden Gardens",
        pom: "Angkrish Raghuvanshi", // Assuming based on performance
        innings1: {
            teamName: 'Knight Riders',
            batting: [
                { name: "Quinton de Kock (Wk)", out: "c Klaasen b Pat Cummins", runs: 1, balls: 6, fours: 0, sixes: 0, sr: 16.67 },
                { name: "Sunil Narine", out: "c Heinrich Klaasen b Mohammed Shami", runs: 7, balls: 7, fours: 0, sixes: 1, sr: 100.00 },
                { name: "Ajinkya Rahane (C)", out: "c & b Zeeshan Ansari", runs: 38, balls: 27, fours: 1, sixes: 4, sr: 140.74 },
                { name: "Angkrish Raghuvanshi", out: "c Heinrich Klaasen b Kamindu Mendis", runs: 50, balls: 32, fours: 5, sixes: 2, sr: 156.25 },
                { name: "Venkatesh Iyer", out: "not out", runs: 60, balls: 29, fours: 7, sixes: 3, sr: 206.90 },
                { name: "Rinku Singh", out: "c Aniket Verma b Harshal Patel", runs: 32, balls: 17, fours: 4, sixes: 1, sr: 188.24 },
                { name: "Andre Russell", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
            ],
            extras: { total: 11, details: "(w 3, lb 8)" },
            total: { score: "200", details: "(6 wkts, 20 ov)" },
            yetToBat: "Moeen Ali, Ramandeep Singh, Harshit Rana, Varun Chakravarthy, Vaibhav Arora",
            fow: "1/1 (Q. de Kock, 1.3 ov) · 16/2 (S. Narine, 3.3 ov) · 97/3 (A. Rahane, 10.6 ov) · 105/4 (A. Raghuvanshi, 12.4 ov) · 197/5 (V. Iyer, 19.3 ov) · 200/6 (A. Russell, 19.6 ov)",
            bowling: [
                { name: "Mohammed Shami", overs: 4.0, maidens: 0, runs: 29, wickets: 1, econ: 7.25 },
                { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
                { name: "Simarjeet Singh", overs: 4.0, maidens: 0, runs: 47, wickets: 0, econ: 11.75 },
                { name: "Zeeshan Ansari", overs: 3.0, maidens: 0, runs: 25, wickets: 1, econ: 8.33 },
                { name: "Harshal Patel", overs: 4.0, maidens: 0, runs: 43, wickets: 1, econ: 10.75 },
                { name: "Kamindu Mendis", overs: 1.0, maidens: 0, runs: 4, wickets: 1, econ: 4.00 }
            ]
        },
        innings2: {
            teamName: 'Sunrisers',
            batting: [
                { name: "Travis Head", out: "c Harshit Rana b Vaibhav Arora", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
                { name: "Abhishek Sharma", out: "c Venkatesh Iyer b Harshit Rana", runs: 2, balls: 6, fours: 0, sixes: 0, sr: 33.33 },
                { name: "Ishan Kishan", out: "c Angkrish Raghuvanshi b Vaibhav Arora", runs: 2, balls: 5, fours: 0, sixes: 0, sr: 40.00 },
                { name: "Nitish Kumar Reddy", out: "c Rinku Singh b Andre Russell", runs: 19, balls: 15, fours: 2, sixes: 1, sr: 126.67 },
                { name: "Kamindu Mendis", out: "not out", runs: 27, balls: 20, fours: 1, sixes: 2, sr: 135.00 },
                { name: "Heinrich Klaasen (Wk)", out: "c Moeen Ali b Vaibhav Arora", runs: 33, balls: 21, fours: 2, sixes: 2, sr: 157.14 },
                { name: "Aniket Verma", out: "c Ajinkya Rahane b Varun Chakravarthy", runs: 8, balls: 6, fours: 1, sixes: 0, sr: 100.00 },
                { name: "Pat Cummins (C)", out: "c & b Andre Russell", runs: 14, balls: 15, fours: 2, sixes: 0, sr: 93.33 },
                { name: "Harshal Patel", out: "b Varun Chakravarthy", runs: 3, balls: 5, fours: 0, sixes: 0, sr: 60.00 },
                { name: "Simarjeet Singh", out: "c & b Varun Chakravarthy", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Mohammed Shami", out: "not out", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 }
            ],
            extras: { total: 6, details: "(w 5, lb 1)" },
            total: { score: "120", details: "(10 wkts, 16.4 ov)" },
            yetToBat: "Zeeshan Ansari",
            fow: "5/1 (T. Head, 0.2 ov) · 5/2 (A. Sharma, 1.6 ov) · 9/3 (I. Kishan, 2.1 ov) · 44/4 (N. K. Reddy, 6.4 ov) · 68/5 (K. Mendis, 9.3 ov) · 71/6 (A. Verma, 10.4 ov) · 112/7 (H. Klaasen, 13.5 ov) · 114/8 (P. Cummins, 15.1 ov) · 114/9 (S. Singh, 15.2 ov) · 120/10 (H. Patel, 16.4 ov)",
            bowling: [
                { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 29, wickets: 3, econ: 7.25 },
                { name: "Harshit Rana", overs: 3.0, maidens: 0, runs: 15, wickets: 1, econ: 5.00 },
                { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 22, wickets: 3, econ: 5.50 },
                { name: "Andre Russell", overs: 1.4, maidens: 0, runs: 21, wickets: 2, econ: 12.60 },
                { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 }
            ]
        }
    },
    // Match 16 (index 15)
    {
        team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '203/8', overs: '20' },
        team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '191/5', overs: '20' },
        status: 'LSG won by 12 runs',
        toss: "MI won the toss and decided to bowl",
        venue: "Ekana Cricket Stadium",
        pom: "Mitchell Marsh", // Assuming based on performance
        innings1: {
            teamName: 'Super Giants',
            batting: [
                { name: "Mitchell Marsh", out: "c & b Vignesh Puthur", runs: 60, balls: 31, fours: 9, sixes: 2, sr: 193.55 },
                { name: "Aiden Markram", out: "c Naman Dhir b Hardik Pandya", runs: 53, balls: 38, fours: 2, sixes: 4, sr: 139.47 },
                { name: "Nicholas Pooran", out: "c Deepak Chahar b Hardik Pandya", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.00 },
                { name: "Rishabh Pant (C)(Wk)", out: "c & b Ashwani Kumar", runs: 2, balls: 8, fours: 0, sixes: 0, sr: 33.33 },
                { name: "Ayush Badoni", out: "c Naman Dhir b Ashwani Kumar", runs: 30, balls: 19, fours: 4, sixes: 0, sr: 157.89 },
                { name: "David Miller", out: "not out", runs: 27, balls: 14, fours: 3, sixes: 1, sr: 192.86 },
                { name: "Abdul Samad", out: "c Naman Dhir b Trent Boult", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
                { name: "Shardul Thakur", out: "not out", runs: 5, balls: 2, fours: 1, sixes: 0, sr: 250.00 },
                { name: "Avesh Khan", out: "c Hardik Pandya b Hardik Pandya", runs: 2, balls: 1, fours: 0, sixes: 0, sr: 200.00 }
            ],
            extras: { total: 8, details: "(w 8)" },
            total: { score: "203", details: "(8 wkts, 20 ov)" },
            yetToBat: "Digvesh Singh, Ravi Bishnoi, M Siddharth (IP)",
            fow: "78/1 (M. Marsh, 6.6 ov) · 81/2 (N. Pooran, 8.3 ov) · 101/3 (R. Pant, 10.4 ov) · 120/4 (A. Markram, 12.5 ov) · 150/5 (A. Badoni, 15.6 ov) · 189/6 (A. Samad, 18.2 ov) · 200/7 (D. Miller, 19.4 ov) · 203/8 (A. Deep, 19.5 ov)",
            bowling: [
                { name: "Trent Boult", overs: 3.0, maidens: 0, runs: 28, wickets: 1, econ: 9.33 },
                { name: "Deepak Chahar", overs: 2.0, maidens: 0, runs: 23, wickets: 0, econ: 11.50 },
                { name: "Ashwani Kumar", overs: 3.0, maidens: 0, runs: 39, wickets: 1, econ: 13.00 },
                { name: "Mitchell Santner", overs: 4.0, maidens: 0, runs: 46, wickets: 0, econ: 11.50 },
                { name: "Vignesh Puthur", overs: 4.0, maidens: 0, runs: 31, wickets: 1, econ: 7.75 },
                { name: "Hardik Pandya (C)", overs: 4.0, maidens: 0, runs: 36, wickets: 5, econ: 9.00 }
            ]
        },
        innings2: {
            teamName: 'Indians',
            batting: [
                { name: "Will Jacks", out: "c Ravi Bishnoi b Akash Deep", runs: 5, balls: 8, fours: 1, sixes: 0, sr: 62.50 },
                { name: "Ryan Rickelton (Wk)", out: "c & b Shardul Thakur", runs: 5, balls: 7, fours: 0, sixes: 0, sr: 71.43 },
                { name: "Naman Dhir", out: "b Digvesh Rathi", runs: 46, balls: 24, fours: 4, sixes: 3, sr: 191.67 },
                { name: "Suryakumar Yadav", out: "c & b Avesh Khan", runs: 67, balls: 43, fours: 9, sixes: 1, sr: 155.81 },
                { name: "Tilak Varma (P)", out: "retired out", runs: 25, balls: 23, fours: 2, sixes: 0, sr: 108.70 },
                { name: "Hardik Pandya (C)", out: "not out", runs: 28, balls: 16, fours: 2, sixes: 1, sr: 175.00 },
                { name: "Mitchell Santner", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 8, details: "(w 4, lb 4)" },
            total: { score: "191", details: "(5 wkts, 20 ov)" },
            yetToBat: "Raj Bawa, Trent Boult, Ashwani Kumar, Deepak Chahar, Vignesh Puthur",
            fow: "11/1 (W. Jacks, 1.4 ov) · 17/2 (R. Rickelton, 2.2 ov) · 86/3 (N. Dhir, 8.1 ov) · 152/4 (S. Yadav, 16.1 ov) · 180/5 (T. Varma, 18.5 ov)",
            bowling: [
                { name: "Shardul Thakur", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
                { name: "Akash Deep", overs: 4.0, maidens: 0, runs: 46, wickets: 1, econ: 11.50 },
                { name: "Avesh Khan", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
                { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 21, wickets: 1, econ: 5.25 },
                { name: "Ravi Bishnoi (P)", overs: 4.0, maidens: 0, runs: 40, wickets: 0, econ: 10.00 }
            ]
        }
    },
    // Match 17 (index 16)
    {
        team1: { name: 'DC', logo: 'Logos/dc_logo.png', score: '183/6', overs: '20' },
        team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '158/5', overs: '20' },
        status: 'DC won by 25 runs',
        toss: "DC won the toss and decided to bat",
        venue: "MA Chidambaram Stadium",
        pom: "KL Rahul", // Assuming based on performance
        innings1: {
            teamName: 'Capitals',
            batting: [
                { name: "Jake Fraser-McGurk", out: "c Rachin Ravindra b Khaleel Ahmed", runs: 0, balls: 5, fours: 0, sixes: 0, sr: 0.00 },
                { name: "KL Rahul (Wk)", out: "c MS Dhoni b Matheesha Pathirana", runs: 77, balls: 51, fours: 6, sixes: 3, sr: 150.98 },
                { name: "Faf du Plessis", out: "c Matheesha Pathirana b Ravindra Jadeja", runs: 33, balls: 26, fours: 4, sixes: 1, sr: 185.00 },
                { name: "Axar Patel (C)", out: "run out", runs: 21, balls: 14, fours: 2, sixes: 1, sr: 150.00 },
                { name: "Sameer Rizvi", out: "c Ruturaj Gaikwad b Khaleel Ahmed", runs: 20, balls: 15, fours: 1, sixes: 1, sr: 133.33 },
                { name: "Tristan Stubbs", out: "not out", runs: 24, balls: 12, fours: 2, sixes: 1, sr: 200.00 },
                { name: "Ashutosh Sharma", out: "run out (Ravindra Jadeja)", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
            ],
            extras: { total: 6, details: "(w 5, lb 1)" },
            total: { score: "183", details: "(6 wkts, 20 ov)" },
            yetToBat: "Mitchell Starc, Kuldeep Yadav, Mohit Sharma, Mukesh Kumar",
            fow: "0/1 (J. Fraser-McGurk, 0.5 ov) · 84/2 (A. Patel, 8.5 ov) · 90/3 (F. du Plessis, 10.4 ov) · 146/4 (KL Rahul, 16.3 ov) · 174/5 (S. Rizvi, 18.2 ov) · 183/6 (A. Sharma, 19.5 ov)",
            bowling: [
                { name: "Khaleel Ahmed", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
                { name: "Mukesh Choudhary", overs: 4.0, maidens: 0, runs: 58, wickets: 0, econ: 12.50 },
                { name: "Ravichandran Ashwin", overs: 3.0, maidens: 0, runs: 21, wickets: 0, econ: 7.00 },
                { name: "Ravindra Jadeja", overs: 2.0, maidens: 0, runs: 19, wickets: 1, econ: 9.50 },
                { name: "Noor Ahmad", overs: 3.0, maidens: 0, runs: 36, wickets: 1, econ: 12.00 },
                { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 31, wickets: 1, econ: 7.75 }
            ]
        },
        innings2: {
            teamName: 'Super Kings',
            batting: [
                { name: "Rachin Ravindra", out: "c & b Mukesh Kumar", runs: 21, balls: 11, fours: 4, sixes: 0, sr: 52.50 },
                { name: "Devon Conway", out: "c Axar Patel b Vipraj Nigam", runs: 13, balls: 14, fours: 1, sixes: 0, sr: 92.86 },
                { name: "Ruturaj Gaikwad (C)", out: "c Mitchell Starc b Mitchell Starc", runs: 5, balls: 4, fours: 1, sixes: 0, sr: 125.00 },
                { name: "Vijay Shankar", out: "not out", runs: 69, balls: 54, fours: 5, sixes: 1, sr: 127.78 },
                { name: "Shivam Dube", out: "c Tristan Stubbs b Vipraj Nigam", runs: 18, balls: 15, fours: 1, sixes: 1, sr: 120.00 },
                { name: "Ravindra Jadeja", out: "run out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 82.57 },
                { name: "MS Dhoni (Wk)", out: "not out", runs: 30, balls: 26, fours: 1, sixes: 1, sr: 115.38 }
            ],
            extras: { total: 12, details: "(nb 2, w 10, lb 0)" },
            total: { score: "158", details: "(5 wkts, 20 ov)" },
            yetToBat: "Ravichandran Ashwin, Noor Ahmad, Mukesh Choudhary, Khaleel Ahmed, Matheesha Pathirana",
            fow: "6/1 (W. Jacks, 1.2 ov) · 20/2 (R. Gaikwad, 2.3 ov) · 41/3 (D. Conway, 5.3 ov) · 65/4 (S. Dube, 9.2 ov) · 74/5 (R. Jadeja, 10.4 ov)",
            bowling: [
                { name: "Mitchell Starc", overs: 4.0, maidens: 0, runs: 27, wickets: 1, econ: 6.75 },
                { name: "Mukesh Kumar", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
                { name: "Mohit Sharma", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 },
                { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 27, wickets: 2, econ: 6.75 },
                { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 33, wickets: 1, econ: 7.50 },
                { name: "Axar Patel (C)", overs: 1.0, maidens: 0, runs: 5, wickets: 0, econ: 5.00 }
            ]
        }
    },
    // Match 18 (index 17)
    {
        team1: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '205/4', overs: '20' },
        team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '155/9', overs: '20' },
        status: 'RR won by 50 runs',
        toss: "PBKS won the toss and decided to bowl",
        venue: "PCA New Cricket Stadium",
        pom: "Yashasvi Jaiswal", // Assuming based on performance
        innings1: {
            teamName: 'Royals',
            batting: [
                { name: "Yashasvi Jaiswal", out: "c & b Lockie Ferguson", runs: 57, balls: 39, fours: 5, sixes: 3, sr: 148.88 },
                { name: "Sanju Samson (C) (Wk)", out: "c Shashank Singh b Lockie Ferguson", runs: 38, balls: 26, fours: 6, sixes: 0, sr: 146.15 },
                { name: "Riyan Parag", out: "not out", runs: 43, balls: 25, fours: 3, sixes: 3, sr: 172.00 },
                { name: "Nitish Rana", out: "c Suryansh Shedge b Marco Jansen", runs: 12, balls: 7, fours: 2, sixes: 0, sr: 171.43 },
                { name: "Shimron Hetmyer", out: "c Glenn Maxwell b Arshdeep Singh", runs: 29, balls: 12, fours: 2, sixes: 1, sr: 166.67 },
                { name: "Dhruv Jurel", out: "not out", runs: 13, balls: 5, fours: 1, sixes: 1, sr: 260.00 }
            ],
            extras: { total: 12, details: "(w 10, lb 2)" },
            total: { score: "205", details: "(4 wkts, 20 ov)" },
            yetToBat: "Wanindu Hasaranga, Jofra Archer, Maheesh Theekshana, Yudhvir Singh, Sandeep Sharma",
            fow: "50/1 (S. Samson, 10.2 ov) · 123/2 (Y. Jaiswal, 13.2 ov) · 138/3 (N. Rana, 14.4 ov) · 185/4 (S. Hetmyer, 18.6 ov)",
            bowling: [
                { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 35, wickets: 1, econ: 8.75 },
                { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 11.25 },
                { name: "Lockie Ferguson", overs: 4.0, maidens: 0, runs: 37, wickets: 2, econ: 9.25 },
                { name: "Glenn Maxwell", overs: 1.0, maidens: 0, runs: 6, wickets: 0, econ: 6.00 },
                { name: "Yuzvendra Chahal", overs: 3.0, maidens: 0, runs: 32, wickets: 0, econ: 10.67 },
                { name: "Marcus Stoinis", overs: 4.0, maidens: 0, runs: 48, wickets: 0, econ: 12.00 }
            ]
        },
        innings2: {
            teamName: 'Kings',
            batting: [
                { name: "Priyansh Arya", out: "b Jofra Archer", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
                { name: "Prabhsimran Singh (Wk)", out: "c Wanindu Hasaranga b Kumar Kartikeya", runs: 17, balls: 16, fours: 2, sixes: 0, sr: 106.25 },
                { name: "Shreyas Iyer (C)", out: "not out", runs: 10, balls: 5, fours: 2, sixes: 0, sr: 200.00 },
                { name: "Marcus Stoinis", out: "b Sandeep Sharma", runs: 1, balls: 7, fours: 0, sixes: 0, sr: 14.29 },
                { name: "Nehal Wadhera", out: "c Dhruv Jurel b Wanindu Hasaranga", runs: 62, balls: 41, fours: 4, sixes: 3, sr: 151.22 },
                { name: "Suryansh Shedge", out: "c Yashasvi Jaiswal b Maheesh Theekshana", runs: 35, balls: 21, fours: 3, sixes: 1, sr: 142.86 },
                { name: "Shashank Singh", out: "c & b Sandeep Sharma", runs: 10, balls: 13, fours: 0, sixes: 0, sr: 76.92 },
                { name: "Marco Jansen", out: "c Shimron Hetmyer b Maheesh Theekshana", runs: 3, balls: 6, fours: 0, sixes: 0, sr: 50.00 },
                { name: "Lockie Ferguson", out: "c Wanindu Hasaranga b Jofra Archer", runs: 4, balls: 1, fours: 1, sixes: 0, sr: 400.00 }
            ],
            extras: { total: 15, details: "(w 9, b 5, lb 1)" },
            total: { score: "155", details: "(9 wkts, 20 ov)" },
            yetToBat: "Yuzvendra Chahal",
            fow: "0/1 (P. Arya, 0.1 ov) · 11/2 (S. Iyer, 0.6 ov) · 28/3 (M. Stoinis, 3.3 ov) · 43/4 (R. Singh, 6.2 ov) · 101/5 (N. Wadhera, 13.1 ov) · 130/6 (S. Shedge, 15.6 ov) · 138/7 (S. Singh, 16.5 ov) · 145/8 (M. Jansen, 17.4 ov) · 151/9 (A. Singh, 19.5 ov)",
            bowling: [
                { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 25, wickets: 3, econ: 6.25 },
                { name: "Yudhvir Singh", overs: 2.0, maidens: 0, runs: 25, wickets: 0, econ: 16.00 },
                { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 21, wickets: 2, econ: 5.25 },
                { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 26, wickets: 2, econ: 6.50 },
                { name: "Kumar Kartikeya", overs: 2.0, maidens: 0, runs: 21, wickets: 1, econ: 10.50 },
                { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 }
            ]
        }
    },
    // Match 19 (index 18)
{
    team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '152/8', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '153/3', overs: '16.4' },
    status: 'GT won by 7 wickets (20 balls left)',
    toss: "GT won the toss and decided to bowl",
    venue: "Rajiv Gandhi International Stadium",
    pom: "Shubman Gill", // Assuming based on performance
    innings1: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Abhishek Sharma", out: "c Rahul Tewatia b Mohammed Siraj", runs: 18, balls: 16, fours: 4, sixes: 0, sr: 112.50 },
            { name: "Travis Head", out: "c Sai Sudharsan b Mohammed Siraj", runs: 8, balls: 5, fours: 2, sixes: 0, sr: 160.00 },
            { name: "Ishan Kishan", out: "c & b Prasidh Krishna", runs: 17, balls: 14, fours: 2, sixes: 0, sr: 121.43 },
            { name: "Nitish Kumar Reddy", out: "c Jos Buttler b Sai Kishore", runs: 31, balls: 34, fours: 3, sixes: 0, sr: 91.18 },
            { name: "Heinrich Klaasen (Wk)", out: "c & b Sai Kishore", runs: 27, balls: 19, fours: 2, sixes: 1, sr: 142.11 },
            { name: "Aniket Verma", out: "c Jos Buttler b Prasidh Krishna", runs: 18, balls: 14, fours: 2, sixes: 0, sr: 128.57 },
            { name: "Kamindu Mendis", out: "run out", runs: 1, balls: 5, fours: 0, sixes: 0, sr: 20.00 },
            { name: "Pat Cummins (C)", out: "not out", runs: 22, balls: 9, fours: 3, sixes: 1, sr: 244.44 },
            { name: "Simarjeet Singh (IP)", out: "b Mohammed Siraj", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Mohammed Shami", out: "not out", runs: 6, balls: 2, fours: 1, sixes: 0, sr: 300.00 }
        ],
        extras: { total: 4, details: "(w 2, lb 2)" },
        total: { score: "152", details: "(8 wkts, 20 ov)" },
        yetToBat: "Zeeshan Ansari, Jaydev Unadkat",
        fow: "9/1 (T. Head, 0.6 ov) · 38/2 (A. Sharma, 4.4 ov) · 56/3 (I. Kishan, 7.2 ov) · 100/4 (H. Klaasen, 13.5 ov) · 101/5 (N. K. Reddy, 15.1 ov) · 120/6 (K. Mendis, 16.6 ov) · 135/7 (A. Verma, 18.4 ov) · 135/8 (S. Singh, 18.6 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 17, wickets: 4, econ: 4.25 },
            { name: "Ishant Sharma", overs: 4.0, maidens: 0, runs: 53, wickets: 0, econ: 13.25 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 31, wickets: 0, econ: 7.75 },
            { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 24, wickets: 2, econ: 6.00 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Aniket Verma b Mohammed Shami", runs: 3, balls: 5, fours: 0, sixes: 0, sr: 60.00 },
            { name: "Shubman Gill (C)", out: "not out", runs: 61, balls: 43, fours: 9, sixes: 0, sr: 141.86 },
            { name: "Jos Buttler (Wk)", out: "c Heinrich Klaasen b Pat Cummins", runs: 0, balls: 3, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Washington Sundar", out: "c Aniket Verma b Mohammed Shami", runs: 49, balls: 26, fours: 5, sixes: 2, sr: 188.97 },
            { name: "Sherfane Rutherford (IP)", out: "not out", runs: 35, balls: 16, fours: 6, sixes: 1, sr: 218.75 }
        ],
        extras: { total: 3, details: "(w 3)" },
        total: { score: "153", details: "(3 wkts, 16.4 ov)" },
        yetToBat: "Arshad Khan, Rahul Tewatia, Rashid Khan, Sai Kishore, Mohammed Siraj, Prasidh Krishna, Ishant Sharma",
        fow: "15/1 (S. Sudharsan, 2.5 ov) · 56/2 (J. Buttler, 3.5 ov) · 106/3 (W. Sundar, 13.1 ov)",
        bowling: [
            { name: "Mohammed Shami", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
            { name: "Pat Cummins (C)", overs: 3.4, maidens: 0, runs: 26, wickets: 1, econ: 7.09 },
            { name: "Simarjeet Singh (P)", overs: 1.0, maidens: 0, runs: 26, wickets: 0, econ: 26.00 },
            { name: "Jaydev Unadkat", overs: 2.0, maidens: 0, runs: 16, wickets: 0, econ: 8.00 },
            { name: "Zeeshan Ansari", overs: 4.0, maidens: 0, runs: 33, wickets: 0, econ: 8.25 },
            { name: "Kamindu Mendis", overs: 1.0, maidens: 0, runs: 12, wickets: 0, econ: 12.00 },
            { name: "Abhishek Sharma", overs: 1.0, maidens: 0, runs: 18, wickets: 0, econ: 18.00 }
        ]
    }
},
// Match 20 (index 19)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '221/5', overs: '20' },
    team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '209/9', overs: '20' },
    status: 'RCB won by 12 runs',
    toss: "MI won the toss and decided to bowl",
    venue: "Wankhede Stadium",
    pom: "Virat Kohli", // Assuming based on performance
    innings1: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c & b Trent Boult", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
            { name: "Virat Kohli", out: "c Naman Dhir b Hardik Pandya", runs: 67, balls: 42, fours: 8, sixes: 2, sr: 159.52 },
            { name: "Devdutt Padikkal", out: "c & b Vignesh Puthur", runs: 37, balls: 22, fours: 2, sixes: 3, sr: 168.18 },
            { name: "Rajat Patidar (C)", out: "c Ryan Rickelton b Trent Boult", runs: 64, balls: 32, fours: 5, sixes: 4, sr: 200.00 },
            { name: "Liam Livingstone", out: "c Jasprit Bumrah b Hardik Pandya", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Jitesh Sharma (Wk)", out: "not out", runs: 40, balls: 19, fours: 2, sixes: 4, sr: 210.53 },
            { name: "Tim David", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 8, details: "(w 7, lb 1)" },
        total: { score: "221", details: "(5 wkts, 20 ov)" },
        yetToBat: "Krunal Pandya, Bhuvneshwar Kumar, Josh Hazlewood, Yash Dayal, Suyash Sharma",
        fow: "4/1 (P. Salt, 0.2 ov) · 98/2 (D. Padikkal, 8.6 ov) · 143/3 (V. Kohli, 14.1 ov) · 144/4 (L. Livingstone, 15.3 ov) · 219/5 (R. Patidar, 19.4 ov)",
        bowling: [
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 57, wickets: 2, econ: 14.25 },
            { name: "Deepak Chahar", overs: 2.0, maidens: 0, runs: 29, wickets: 0, econ: 14.50 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 29, wickets: 0, econ: 7.25 },
            { name: "Will Jacks", overs: 1.0, maidens: 0, runs: 10, wickets: 0, econ: 10.00 },
            { name: "Mitchell Santner", overs: 4.0, maidens: 0, runs: 40, wickets: 0, econ: 10.00 },
            { name: "Hardik Pandya (C)", overs: 4.0, maidens: 0, runs: 45, wickets: 2, econ: 11.25 },
            { name: "Vignesh Puthur", overs: 1.0, maidens: 0, runs: 10, wickets: 1, econ: 10.00 }
        ]
    },
    innings2: {
        teamName: 'Indians',
        batting: [
            { name: "Rohit Sharma", out: "c & b Yash Dayal", runs: 17, balls: 9, fours: 2, sixes: 1, sr: 188.89 },
            { name: "Ryan Rickelton (Wk)", out: "c Tim David b Josh Hazlewood", runs: 17, balls: 10, fours: 4, sixes: 0, sr: 170.00 },
            { name: "Will Jacks", out: "c Tim David b Krunal Pandya", runs: 22, balls: 18, fours: 2, sixes: 1, sr: 122.22 },
            { name: "Suryakumar Yadav", out: "c Devdutt Padikkal b Yash Dayal", runs: 28, balls: 26, fours: 5, sixes: 0, sr: 107.69 },
            { name: "Tilak Varma", out: "c Liam Livingstone b Yash Dayal", runs: 56, balls: 29, fours: 4, sixes: 4, sr: 193.10 },
            { name: "Hardik Pandya (C)", out: "c Liam Livingstone b Josh Hazlewood", runs: 42, balls: 15, fours: 3, sixes: 4, sr: 280.00 },
            { name: "Naman Dhir", out: "c Tim David b Krunal Pandya", runs: 11, balls: 6, fours: 1, sixes: 1, sr: 183.33 },
            { name: "Mitchell Santner", out: "c Liam Livingstone b Krunal Pandya", runs: 8, balls: 4, fours: 0, sixes: 1, sr: 200.00 },
            { name: "Deepak Chahar", out: "c Tim David b Krunal Pandya", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Trent Boult", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Jasprit Bumrah", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 7, details: "(w 6, lb 1)" },
        total: { score: "209", details: "(9 wkts, 20 ov)" },
        yetToBat: "Vignesh Puthur",
        fow: "21/1 (R. Sharma, 1.4 ov) · 38/2 (R. Rickelton, 3.4 ov) · 79/3 (W. Jacks, 8.4 ov) · 98/4 (S. Yadav, 11.5 ov) · 180/5 (T. Varma, 17.4 ov) · 194/6 (H. Pandya, 18.1 ov) · 203/7 (M. Santner, 19.1 ov) · 203/8 (D. Chahar, 19.2 ov) · 209/9 (N. Dhir, 19.5 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 46, wickets: 1, econ: 11.50 },
            { name: "Yash Dayal", overs: 4.0, maidens: 0, runs: 46, wickets: 2, econ: 11.50 },
            { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 37, wickets: 2, econ: 9.25 },
            { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 32, wickets: 0, econ: 8.00 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 45, wickets: 4, econ: 11.25 }
        ]
    }
},
// Match 21 (index 20)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '238/3', overs: '20' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '234/7', overs: '20' },
    status: 'LSG won by 4 runs',
    toss: "KKR won the toss and decided to bowl",
    venue: "Eden Gardens",
    pom: "Nicholas Pooran",
    innings1: {
        teamName: 'Super Giants',
        batting: [
            { name: "Aiden Markram", out: "c Harshit Rana b Harshit Rana", runs: 47, balls: 28, fours: 4, sixes: 2, sr: 167.86 },
            { name: "Mitchell Marsh", out: "b Sunil Narine", runs: 81, balls: 45, fours: 6, sixes: 5, sr: 180.00 },
            { name: "Nicholas Pooran", out: "c Rinku Singh b Andre Russell", runs: 87, balls: 36, fours: 7, sixes: 8, sr: 241.67 },
            { name: "Abdul Samad", out: "c Ajinkya Rahane b Harshit Rana", runs: 6, balls: 4, fours: 1, sixes: 0, sr: 150.00 },
            { name: "David Miller", out: "not out", runs: 4, balls: 4, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 13, details: "(w 8, b 2, lb 3)" },
        total: { score: "238", details: "(3 wkts, 20 ov)" },
        yetToBat: "Rishabh Pant (C) (Wk), Ayush Badoni, Shardul Thakur, Akash Deep, Avesh Khan, Digvesh Rathi, Ravi Bishnoi",
        fow: "99/1 (A. Markram, 10.2 ov) · 170/2 (M. Marsh, 15.2 ov) · 221/3 (A. Samad, 18.2 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 35, wickets: 0, econ: 8.75 },
            { name: "Spencer Johnson", overs: 3.0, maidens: 0, runs: 46, wickets: 0, econ: 15.33 },
            { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 31, wickets: 0, econ: 7.75 },
            { name: "Harshit Rana", overs: 4.0, maidens: 0, runs: 51, wickets: 2, econ: 12.75 },
            { name: "Sunil Narine", overs: 3.0, maidens: 0, runs: 38, wickets: 0, econ: 12.67 },
            { name: "Andre Russell", overs: 2.0, maidens: 0, runs: 32, wickets: 1, econ: 16.00 }
        ]
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Quinton de Kock (Wk)", out: "c & b Akash Deep", runs: 5, balls: 3, fours: 0, sixes: 0, sr: 166.67 },
            { name: "Sunil Narine", out: "c Aiden Markram b Digvesh Rathi", runs: 30, balls: 13, fours: 4, sixes: 2, sr: 230.77 },
            { name: "Ajinkya Rahane (C)", out: "c David Miller b Shardul Thakur", runs: 61, balls: 35, fours: 8, sixes: 2, sr: 174.29 },
            { name: "Venkatesh Iyer", out: "c David Miller b Akash Deep", runs: 45, balls: 29, fours: 6, sixes: 1, sr: 155.17 },
            { name: "Ramandeep Singh", out: "c Aiden Markram b Ravi Bishnoi", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Angkrish Raghuvanshi", out: "c Rishabh Pant b Avesh Khan", runs: 5, balls: 4, fours: 1, sixes: 0, sr: 125.00 },
            { name: "Andre Russell", out: "run out (Shardul Thakur)", runs: 7, balls: 4, fours: 0, sixes: 1, sr: 175.00 },
            { name: "Rinku Singh", out: "not out", runs: 38, balls: 15, fours: 6, sixes: 2, sr: 253.33 },
            { name: "Harshit Rana", out: "not out", runs: 18, balls: 9, fours: 2, sixes: 0, sr: 111.11 }
        ],
        extras: { total: 22, details: "(w 20, b 1, lb 1)" },
        total: { score: "234", details: "(7 wkts, 20 ov)" },
        yetToBat: "Spencer Johnson, Vaibhav Arora, Varun Chakravarthy",
        fow: "7/1 (Q. de Kock, 2.3 ov) · 91/2 (S. Narine, 6.2 ov) · 162/3 (A. Rahane, 12.8 ov) · 166/4 (R. Singh, 13.6 ov) · 173/5 (A. Raghuvanshi, 14.8 ov) · 177/6 (V. Iyer, 15.2 ov) · 185/7 (A. Russell, 16.4 ov)",
        bowling: [
            { name: "Akash Deep", overs: 4.0, maidens: 0, runs: 55, wickets: 2, econ: 13.75 },
            { name: "Shardul Thakur", overs: 4.0, maidens: 0, runs: 52, wickets: 2, econ: 13.00 },
            { name: "Avesh Khan", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 11.25 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 33, wickets: 1, econ: 8.25 },
            { name: "Ravi Bishnoi", overs: 4.0, maidens: 0, runs: 47, wickets: 1, econ: 11.75 }
        ]
    }
},
// Match 22 (index 21)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '219/6', overs: '20' },
    team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '201/5', overs: '20' },
    status: 'PBKS won by 18 runs',
    toss: "PBKS won the toss and decided to bat",
    venue: "PCA New Cricket Stadium",
    pom: "Priyansh Arya", // Assuming based on performance
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "c Vijay Shankar b Noor Ahmad", runs: 103, balls: 42, fours: 7, sixes: 9, sr: 245.24 },
            { name: "Prabhsimran Singh (Wk)", out: "c Mukesh Choudhary b Mukesh Choudhary", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Shreyas Iyer (C)", out: "not out", runs: 9, balls: 7, fours: 0, sixes: 1, sr: 128.57 },
            { name: "Marcus Stoinis", out: "c Vijay Shankar b Khaleel Ahmed", runs: 4, balls: 7, fours: 0, sixes: 0, sr: 57.14 },
            { name: "Nehal Wadhera", out: "c MS Dhoni b Ravichandran Ashwin", runs: 9, balls: 7, fours: 0, sixes: 1, sr: 128.57 },
            { name: "Suryansh Shedge", out: "c & b Ravichandran Ashwin", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Shashank Singh", out: "not out", runs: 32, balls: 36, fours: 2, sixes: 3, sr: 144.44 },
            { name: "Marco Jansen", out: "not out", runs: 34, balls: 19, fours: 2, sixes: 2, sr: 178.95 }
        ],
        extras: { total: 7, details: "(nb 2, w 2, lb 3)" },
        total: { score: "219", details: "(6 wkts, 20 ov)" },
        yetToBat: "Yuzvendra Chahal, Arshdeep Singh, Lockie Ferguson, Yash Thakur",
        fow: "1/1 (P. Singh, 1.2 ov) · 32/2 (S. Iyer, 2.4 ov) · 54/3 (M. Stoinis, 4.6 ov) · 81/4 (N. Wadhera, 7.2 ov) · 83/5 (G. Maxwell, 7.6 ov) · 134/6 (P. Arya, 13.4 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 4.0, maidens: 0, runs: 45, wickets: 2, econ: 11.25 },
            { name: "Mukesh Choudhary", overs: 2.0, maidens: 0, runs: 21, wickets: 1, econ: 10.50 },
            { name: "Ravichandran Ashwin", overs: 4.0, maidens: 0, runs: 48, wickets: 2, econ: 12.00 },
            { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 18, wickets: 0, econ: 6.00 },
            { name: "Noor Ahmad", overs: 3.0, maidens: 0, runs: 32, wickets: 1, econ: 10.67 },
            { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 52, wickets: 0, econ: 13.00 }
        ]
    },
    innings2: {
        teamName: 'Super Kings',
        batting: [
            { name: "Rachin Ravindra", out: "c Prabhsimran Singh b Glenn Maxwell", runs: 26, balls: 20, fours: 3, sixes: 1, sr: 130.00 },
            { name: "Devon Conway", out: "not out", runs: 69, balls: 49, fours: 6, sixes: 2, sr: 140.82 },
            { name: "Ruturaj Gaikwad (C)", out: "c Priyansh Arya b Lockie Ferguson", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Shivam Dube", out: "c & b Marco Jansen", runs: 42, balls: 27, fours: 3, sixes: 2, sr: 155.56 },
            { name: "MS Dhoni (Wk)", out: "c Yuzvendra Chahal b Yash Thakur", runs: 27, balls: 12, fours: 1, sixes: 3, sr: 225.00 },
            { name: "Ravindra Jadeja", out: "not out", runs: 9, balls: 5, fours: 0, sixes: 1, sr: 180.00 },
            { name: "Vijay Shankar", out: "run out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 15, details: "(nb 1, w 9, lb 5)" },
        total: { score: "201", details: "(5 wkts, 20 ov)" },
        yetToBat: "Ravichandran Ashwin, Noor Ahmad, Mukesh Choudhary, Khaleel Ahmed, Matheesha Pathirana",
        fow: "57/1 (R. Ravindra, 6.3 ov) · 62/2 (R. Gaikwad, 7.2 ov) · 151/3 (S. Dube, 15.5 ov) · 171/4 (D. Conway, 17.5 ov) · 192/5 (MS Dhoni, 19.1 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 39, wickets: 0, econ: 9.75 },
            { name: "Yash Thakur", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
            { name: "Glenn Maxwell", overs: 2.0, maidens: 0, runs: 11, wickets: 1, econ: 5.50 },
            { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 48, wickets: 0, econ: 12.00 },
            { name: "Lockie Ferguson", overs: 4.0, maidens: 0, runs: 40, wickets: 2, econ: 10.00 },
            { name: "Marcus Stoinis", overs: 1.0, maidens: 0, runs: 10, wickets: 0, econ: 10.00 },
            { name: "Yuzvendra Chahal", overs: 1.0, maidens: 0, runs: 9, wickets: 0, econ: 9.00 }
        ]
    }
},
// Match 23 (index 22)
{
    team1: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '217/6', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '159', overs: '(19.2)' },
    status: 'GT won by 58 runs',
    toss: "RR won the toss and decided to bowl",
    venue: "Narendra Modi Stadium",
    pom: "Sai Sudharsan", // Assuming based on performance
    innings1: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Sanju Samson b Tushar Deshpande", runs: 52, balls: 33, fours: 4, sixes: 3, sr: 154.72 },
            { name: "Shubman Gill (C)", out: "c Jofra Archer b Fazalhaq Farooqi", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Jos Buttler (Wk)", out: "b Maheesh Theekshana", runs: 38, balls: 25, fours: 5, sixes: 0, sr: 144.00 },
            { name: "Shahrukh Khan", out: "c Sanju Samson b Maheesh Theekshana", runs: 36, balls: 20, fours: 4, sixes: 2, sr: 180.00 },
            { name: "Sherfane Rutherford", out: "c Sanju Samson b Sandeep Sharma", runs: 7, balls: 3, fours: 0, sixes: 1, sr: 233.33 },
            { name: "Rahul Tewatia", out: "not out", runs: 24, balls: 12, fours: 2, sixes: 2, sr: 200.00 },
            { name: "Rashid Khan", out: "c Tushar Deshpande b Tushar Deshpande", runs: 12, balls: 4, fours: 1, sixes: 1, sr: 300.00 },
            { name: "Arshad Khan", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 18, details: "(w 17, b 1)" },
        total: { score: "217", details: "(6 wkts, 20 ov)" },
        yetToBat: "Sai Kishore, Mohammed Siraj, Prasidh Krishna, Kulwant Khejroliya (IP)",
        fow: "14/1 (S. Gill, 2.3 ov) · 94/2 (J. Buttler, 9.6 ov) · 158/3 (S. Khan, 15.4 ov) · 162/4 (S. Rutherford, 16.1 ov) · 187/5 (S. Sudharsan, 18.2 ov) · 201/6 (R. Khan, 18.6 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Fazalhaq Farooqi", overs: 4.0, maidens: 0, runs: 38, wickets: 0, econ: 9.50 },
            { name: "Tushar Deshpande", overs: 4.0, maidens: 0, runs: 52, wickets: 2, econ: 13.25 },
            { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 54, wickets: 2, econ: 13.50 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Rashid Khan b Rashid Khan", runs: 6, balls: 7, fours: 1, sixes: 0, sr: 85.71 },
            { name: "Sanju Samson (C) (Wk)", out: "c Sai Kishore b Prasidh Krishna", runs: 41, balls: 28, fours: 4, sixes: 2, sr: 146.43 },
            { name: "Nitish Rana", out: "run out", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Riyan Parag", out: "c Shubman Gill b Kulwant Khejroliya", runs: 28, balls: 14, fours: 1, sixes: 3, sr: 185.71 },
            { name: "Dhruv Jurel", out: "c Sai Sudharsan b Rashid Khan", runs: 5, balls: 4, fours: 1, sixes: 0, sr: 125.00 },
            { name: "Shimron Hetmyer", out: "c Rahul Tewatia b Sai Kishore", runs: 52, balls: 32, fours: 4, sixes: 3, sr: 162.50 },
            { name: "Shubham Dubey (IP)", out: "run out", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Jofra Archer", out: "c Sai Sudharsan b Prasidh Krishna", runs: 4, balls: 4, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Maheesh Theekshana", out: "c Sai Sudharsan b Sai Kishore", runs: 3, balls: 13, fours: 0, sixes: 0, sr: 35.46 },
            { name: "Tushar Deshpande", out: "c Rashid Khan b Sai Kishore", runs: 3, balls: 3, fours: 0, sixes: 0, sr: 120.00 },
            { name: "Sandeep Sharma", out: "not out", runs: 6, balls: 5, fours: 0, sixes: 0, sr: 120.00 }
        ],
        extras: { total: 9, details: "(w 9)" },
        total: { score: "159", details: "(10 wkts, 19.2 ov)" },
        yetToBat: "Fazalhaq Farooqi",
        fow: "10/1 (Y. Jaiswal, 1.2 ov) · 12/2 (N. Rana, 2.2 ov) · 60/3 (R. Parag, 6.4 ov) · 66/4 (D. Jurel, 7.4 ov) · 118/5 (S. Samson, 12.5 ov) · 119/6 (S. Dubey, 13.2 ov) · 147/7 (J. Archer, 15.3 ov) · 145/8 (S. Hetmyer, 15.6 ov) · 150/9 (T. Deshpande, 18.3 ov) · 152/10 (M. Theekshana, 19.2 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Arshad Khan", overs: 2.0, maidens: 0, runs: 19, wickets: 1, econ: 9.50 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 24, wickets: 3, econ: 6.00 },
            { name: "Kulwant Khejroliya (P)", overs: 3.0, maidens: 0, runs: 29, wickets: 1, econ: 9.67 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 37, wickets: 2, econ: 9.25 },
            { name: "Sai Kishore", overs: 2.2, maidens: 0, runs: 20, wickets: 2, econ: 8.57 }
        ]
    }
},
// Match 24 (index 23)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '163/7', overs: '20' },
    team2: { name: 'DC', logo: 'Logos/dc_logo.png', score: '169/4', overs: '17.5' },
    status: 'DC won by 6 wickets (13 balls left)',
    toss: "DC won the toss and decided to bowl",
    venue: "M. Chinnaswamy Stadium",
    pom: "KL Rahul", // Assuming based on performance
    innings1: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "run out (Vipraj Nigam)", runs: 17, balls: 17, fours: 4, sixes: 0, sr: 117.65 },
            { name: "Virat Kohli", out: "c Mohit Sharma b Vipraj Nigam", runs: 22, balls: 14, fours: 1, sixes: 2, sr: 157.14 },
            { name: "Devdutt Padikkal", out: "c & b Mukesh Kumar", runs: 1, balls: 8, fours: 0, sixes: 0, sr: 12.50 },
            { name: "Rajat Patidar (C)", out: "c Axar Patel b Kuldeep Yadav", runs: 25, balls: 23, fours: 1, sixes: 1, sr: 108.70 },
            { name: "Liam Livingstone", out: "c Ashutosh Sharma b Mohit Sharma", runs: 4, balls: 6, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Jitesh Sharma (Wk)", out: "c KL Rahul b Kuldeep Yadav", runs: 3, balls: 11, fours: 0, sixes: 0, sr: 27.27 },
            { name: "Krunal Pandya", out: "c Ashutosh Sharma b Vipraj Nigam", runs: 18, balls: 18, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Tim David", out: "not out", runs: 37, balls: 20, fours: 2, sixes: 4, sr: 185.00 },
            { name: "Bhuvneshwar Kumar", out: "not out", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 }
        ],
        extras: { total: 15, details: "(nb 1, w 9, lb 5)" },
        total: { score: "163", details: "(7 wkts, 20 ov)" },
        yetToBat: "Josh Hazlewood, Yash Dayal, Suyash Sharma",
        fow: "81/1 (P. Salt, 3.5 ov) · 84/2 (D. Padikkal, 5.4 ov) · 74/3 (V. Kohli, 8.6 ov) · 91/4 (L. Livingstone, 9.3 ov) · 102/5 (J. Sharma, 12.2 ov) · 117/6 (R. Patidar, 14.5 ov) · 125/7 (K. Pandya, 16.2 ov)",
        bowling: [
            { name: "Mitchell Starc", overs: 3.0, maidens: 0, runs: 35, wickets: 0, econ: 11.67 },
            { name: "Axar Patel (C)", overs: 4.0, maidens: 0, runs: 32, wickets: 0, econ: 13.00 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 18, wickets: 2, econ: 4.50 },
            { name: "Mukesh Kumar", overs: 3.0, maidens: 0, runs: 26, wickets: 1, econ: 8.67 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 17, wickets: 2, econ: 4.25 },
            { name: "Mohit Sharma", overs: 2.0, maidens: 0, runs: 16, wickets: 1, econ: 8.00 }
        ]
    },
    innings2: {
        teamName: 'Capitals',
        batting: [
            { name: "Faf du Plessis", out: "c Rajat Patidar b Yash Dayal", runs: 2, balls: 6, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Jake Fraser-McGurk", out: "c Jitesh Sharma b Bhuvneshwar Kumar", runs: 7, balls: 6, fours: 1, sixes: 0, sr: 116.67 },
            { name: "Abishek Porel", out: "c & b Bhuvneshwar Kumar", runs: 7, balls: 7, fours: 1, sixes: 0, sr: 100.00 },
            { name: "KL Rahul (Wk)", out: "not out", runs: 93, balls: 53, fours: 7, sixes: 6, sr: 175.47 },
            { name: "Axar Patel (C)", out: "c Tim David b Suyash Sharma", runs: 15, balls: 11, fours: 2, sixes: 0, sr: 136.36 },
            { name: "Tristan Stubbs", out: "not out", runs: 38, balls: 23, fours: 4, sixes: 1, sr: 165.22 }
        ],
        extras: { total: 7, details: "(w 7)" },
        total: { score: "169", details: "(4 wkts, 17.5 ov)" },
        yetToBat: "Ashutosh Sharma, Vipraj Nigam, Mitchell Starc, Kuldeep Yadav, Mohit Sharma, Mukesh Kumar",
        fow: "9/1 (F. du Plessis, 1.6 ov) · 10/2 (J. Fraser-McGurk, 2.1 ov) · 30/3 (A. Porel, 4.3 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 26, wickets: 2, econ: 6.50 },
            { name: "Yash Dayal", overs: 3.5, maidens: 0, runs: 45, wickets: 1, econ: 11.74 },
            { name: "Josh Hazlewood", overs: 3.0, maidens: 0, runs: 40, wickets: 0, econ: 13.33 },
            { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 25, wickets: 1, econ: 6.25 },
            { name: "Krunal Pandya", overs: 2.0, maidens: 0, runs: 19, wickets: 0, econ: 9.50 },
            { name: "Liam Livingstone", overs: 1.0, maidens: 0, runs: 14, wickets: 0, econ: 14.00 }
        ]
    }
},
// Match 25 (index 24)
{
    team1: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '103/9', overs: '20' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '107/2', overs: '10.1' },
    status: 'KKR won by 8 wickets (59 balls left)',
    toss: "KKR won the toss and decided to bowl",
    venue: "MA Chidambaram Stadium",
    pom: "Quinton de Kock", // Assuming based on performance
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Rachin Ravindra", out: "c Ajinkya Rahane b Harshit Rana", runs: 4, balls: 9, fours: 0, sixes: 0, sr: 44.44 },
            { name: "Devon Conway", out: "b Moeen Ali", runs: 12, balls: 11, fours: 2, sixes: 0, sr: 109.09 },
            { name: "Rahul Tripathi", out: "c & b Vaibhav Arora", runs: 16, balls: 22, fours: 1, sixes: 0, sr: 72.73 },
            { name: "Vijay Shankar", out: "c Moeen Ali b Varun Chakravarthy", runs: 29, balls: 21, fours: 2, sixes: 1, sr: 138.10 },
            { name: "Shivam Dube", out: "not out", runs: 31, balls: 29, fours: 3, sixes: 0, sr: 106.90 },
            { name: "Ravichandran Ashwin", out: "run out", runs: 1, balls: 7, fours: 0, sixes: 0, sr: 14.29 },
            { name: "Ravindra Jadeja", out: "c Ramandeep Singh b Sunil Narine", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Deepak Hooda (P)", out: "c Vaibhav Arora b Varun Chakravarthy", runs: 0, balls: 4, fours: 0, sixes: 0, sr: 0.00 },
            { name: "MS Dhoni (C) (Wk)", out: "run out", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 },
            { name: "Noor Ahmad", out: "c Angkrish Raghuvanshi b Vaibhav Arora", runs: 1, balls: 8, fours: 0, sixes: 0, sr: 12.50 },
            { name: "Anshul Kamboj", out: "not out", runs: 3, balls: 3, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 5, details: "(w 4, lb 1)" },
        total: { score: "103", details: "(9 wkts, 20 ov)" },
        yetToBat: "Khaleel Ahmed",
        fow: "16/1 (D. Conway, 3.1 ov) · 16/2 (R. Ravindra, 4.1 ov) · 59/3 (V. Shankar, 9.4 ov) · 65/4 (R. Tripathi, 10.6 ov) · 70/5 (R. Ashwin, 12.5 ov) · 71/6 (R. Jadeja, 13.5 ov) · 72/7 (D. Hooda, 14.2 ov) · 76/8 (MS Dhoni, 15.3 ov) · 76/9 (N. Ahmad, 17.2 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 31, wickets: 1, econ: 7.75 },
            { name: "Moeen Ali", overs: 4.0, maidens: 0, runs: 20, wickets: 1, econ: 5.00 },
            { name: "Harshit Rana", overs: 4.0, maidens: 0, runs: 16, wickets: 2, econ: 4.00 },
            { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 22, wickets: 2, econ: 5.50 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 13, wickets: 3, econ: 3.25 }
        ]
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Quinton de Kock (Wk)", out: "c & b Anshul Kamboj", runs: 13, balls: 10, fours: 0, sixes: 2, sr: 140.70 },
            { name: "Sunil Narine", out: "c Noor Ahmad b Noor Ahmad", runs: 44, balls: 18, fours: 2, sixes: 5, sr: 244.44 },
            { name: "Ajinkya Rahane (C)", out: "not out", runs: 20, balls: 17, fours: 1, sixes: 1, sr: 117.65 },
            { name: "Rinku Singh", out: "not out", runs: 15, balls: 12, fours: 1, sixes: 1, sr: 125.00 }
        ],
        extras: { total: 5, details: "(nb 2, w 2, lb 1)" },
        total: { score: "107", details: "(2 wkts, 10.1 ov)" },
        yetToBat: "Venkatesh Iyer, Ramandeep Singh, Andre Russell, Moeen Ali, Harshit Rana, Vaibhav Arora, Varun Chakravarthy",
        fow: "40/1 (Q. de Kock, 4.1 ov) · 82/2 (S. Narine, 7.1 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 3.0, maidens: 0, runs: 45, wickets: 0, econ: 13.33 },
            { name: "Anshul Kamboj", overs: 2.0, maidens: 0, runs: 19, wickets: 1, econ: 9.50 },
            { name: "Ravichandran Ashwin", overs: 3.0, maidens: 0, runs: 30, wickets: 0, econ: 10.00 },
            { name: "Noor Ahmad", overs: 2.0, maidens: 0, runs: 8, wickets: 1, econ: 4.00 },
            { name: "Ravindra Jadeja", overs: 0.1, maidens: 0, runs: 9, wickets: 0, econ: 54.00 }
        ]
    }
},
// Match 26 (index 25)
{
    team1: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '180/6', overs: '20' },
    team2: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '186/4', overs: '19.3' },
    status: 'LSG won by 6 wickets (3 balls left)',
    toss: "LSG won the toss and decided to bowl",
    venue: "Ekana Cricket Stadium",
    pom: "Nicholas Pooran", // Assuming based on performance
    innings1: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Nicholas Pooran b Ravi Bishnoi", runs: 58, balls: 37, fours: 7, sixes: 1, sr: 151.35 },
            { name: "Shubman Gill (C)", out: "c Aiden Markram b Avesh Khan", runs: 65, balls: 38, fours: 6, sixes: 1, sr: 157.89 },
            { name: "Jos Buttler (Wk)", out: "c & b Digvesh Rathi", runs: 16, balls: 14, fours: 2, sixes: 0, sr: 114.29 },
            { name: "Washington Sundar", out: "not out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Sherfane Rutherford", out: "b Shardul Thakur", runs: 22, balls: 19, fours: 3, sixes: 0, sr: 115.79 },
            { name: "Shahrukh Khan", out: "not out", runs: 11, balls: 6, fours: 0, sixes: 1, sr: 183.33 },
            { name: "Rahul Tewatia", out: "c Nicholas Pooran b Shardul Thakur", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Rashid Khan", out: "not out", runs: 4, balls: 2, fours: 0, sixes: 0, sr: 200.00 }
        ],
        extras: { total: 9, details: "(w 9)" },
        total: { score: "180", details: "(6 wkts, 20 ov)" },
        yetToBat: "Arshad Khan, Sai Kishore, Mohammed Siraj, Prasidh Krishna (IP)",
        fow: "20/1 (S. Gill, 12.1 ov) · 122/2 (S. Sudharsan, 13.1 ov) · 127/3 (W. Sundar, 13.6 ov) · 145/4 (J. Buttler, 16.4 ov) · 178/5 (S. Rutherford, 19.3 ov) · 178/6 (R. Tewatia, 19.4 ov)",
        bowling: [
            { name: "Shardul Thakur", overs: 4.0, maidens: 0, runs: 34, wickets: 2, econ: 8.50 },
            { name: "Akash Deep", overs: 3.0, maidens: 0, runs: 33, wickets: 0, econ: 11.00 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Avesh Khan", overs: 4.0, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
            { name: "Ravi Bishnoi", overs: 4.0, maidens: 0, runs: 36, wickets: 2, econ: 9.00 },
            { name: "Aiden Markram", overs: 1.0, maidens: 0, runs: 15, wickets: 0, econ: 15.00 }
        ]
    },
    innings2: {
        teamName: 'Super Giants',
        batting: [
            { name: "Aiden Markram", out: "c Shubman Gill b Prasidh Krishna", runs: 51, balls: 31, fours: 9, sixes: 1, sr: 167.10 },
            { name: "Rishabh Pant (C)(Wk)", out: "b Sai Kishore", runs: 21, balls: 18, fours: 4, sixes: 0, sr: 116.67 },
            { name: "Nicholas Pooran", out: "not out", runs: 61, balls: 34, fours: 1, sixes: 7, sr: 179.41 },
            { name: "Ayush Badoni (IP)", out: "c & b Rashid Khan", runs: 28, balls: 20, fours: 2, sixes: 1, sr: 140.00 },
            { name: "David Miller", out: "c Washington Sundar b Washington Sundar", runs: 7, balls: 11, fours: 0, sixes: 0, sr: 63.64 },
            { name: "Abdul Samad", out: "not out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 }
        ],
        extras: { total: 9, details: "(w 8, b 1)" },
        total: { score: "186", details: "(4 wkts, 19.3 ov)" },
        yetToBat: "Himmat Singh, Shardul Thakur, Akash Deep, Avesh Khan, Ravi Bishnoi, Digvesh Rathi",
        fow: "85/1 (R. Pant, 8.2 ov) · 123/2 (A. Markram, 11.1 ov) · 159/3 (N. Pooran, 15.2 ov) · 174/4 (D. Miller, 18.4 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 30, wickets: 0, econ: 12.50 },
            { name: "Arshad Khan", overs: 2.0, maidens: 0, runs: 11, wickets: 0, econ: 5.50 },
            { name: "Prasidh Krishna (P)", overs: 4.0, maidens: 0, runs: 26, wickets: 2, econ: 6.50 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 35, wickets: 1, econ: 8.75 },
            { name: "Washington Sundar", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 7.00 },
            { name: "Sai Kishore", overs: 1.3, maidens: 0, runs: 35, wickets: 0, econ: 23.33 }
        ]
    }
},
// Match 27 (index 26)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '245/6', overs: '20' },
    team2: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '247/2', overs: '18.3' },
    status: 'SRH won by 8 wickets (9 balls left)',
    toss: "PBKS won the toss and decided to bat",
    venue: "Rajiv Gandhi International Stadium",
    pom: "Abhishek Sharma", // Assuming based on performance
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "c Pat Cummins b Harshal Patel", runs: 38, balls: 13, fours: 2, sixes: 4, sr: 276.92 },
            { name: "Prabhsimran Singh (Wk)", out: "c Pat Cummins b Eshan Malinga", runs: 42, balls: 23, fours: 7, sixes: 1, sr: 182.61 },
            { name: "Shreyas Iyer (C)", out: "c Travis Head b Harshal Patel", runs: 52, balls: 38, fours: 6, sixes: 0, sr: 227.78 },
            { name: "Nehal Wadhera", out: "b Eshan Malinga", runs: 27, balls: 22, fours: 2, sixes: 1, sr: 122.73 },
            { name: "Shashank Singh", out: "c Harshal Patel b Harshal Patel", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Glenn Maxwell", out: "b Harshal Patel", runs: 3, balls: 7, fours: 0, sixes: 0, sr: 42.86 },
            { name: "Marcus Stoinis", out: "not out", runs: 34, balls: 11, fours: 1, sixes: 4, sr: 309.09 },
            { name: "Marco Jansen", out: "not out", runs: 5, balls: 5, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 14, details: "(w 12, lb 2)" },
        total: { score: "245", details: "(6 wkts, 20 ov)" },
        yetToBat: "Lockie Ferguson, Arshdeep Singh, Yuzvendra Chahal, Yash Thakur",
        fow: "66/1 (P. Arya, 3.5 ov) · 91/2 (P. Singh, 6.5 ov) · 164/3 (N. Wadhera, 13.3 ov) · 168/4 (S. Singh, 15.1 ov) · 200/5 (G. Maxwell, 17.2 ov) · 228/6 (S. Iyer, 18.5 ov)",
        bowling: [
            { name: "Mohammed Shami", overs: 4.0, maidens: 0, runs: 75, wickets: 0, econ: 18.75 },
            { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 45, wickets: 0, econ: 10.00 },
            { name: "Harshal Patel", overs: 4.0, maidens: 0, runs: 42, wickets: 4, econ: 10.50 },
            { name: "Eshan Malinga", overs: 4.0, maidens: 0, runs: 45, wickets: 2, econ: 11.25 },
            { name: "Zeeshan Ansari", overs: 4.0, maidens: 0, runs: 41, wickets: 0, econ: 10.25 }
        ]
    },
    innings2: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Travis Head", out: "c Glenn Maxwell b Yuzvendra Chahal", runs: 52, balls: 29, fours: 8, sixes: 3, sr: 179.38 },
            { name: "Abhishek Sharma", out: "c & b Arshdeep Singh", runs: 141, balls: 56, fours: 14, sixes: 10, sr: 258.38 },
            { name: "Heinrich Klaasen (Wk)", out: "not out", runs: 21, balls: 14, fours: 2, sixes: 1, sr: 150.00 },
            { name: "Ishan Kishan", out: "not out", runs: 9, balls: 6, fours: 1, sixes: 0, sr: 150.00 }
        ],
        extras: { total: 10, details: "(nb 1, w 8, lb 1)" },
        total: { score: "247", details: "(2 wkts, 18.3 ov)" },
        yetToBat: "Nitish Kumar Reddy, Aniket Verma, Abhinav Manohar, Pat Cummins (C), Harshal Patel, Mohammed Shami, Zeeshan Ansari, Eshan Malinga",
        fow: "17/1 (T. Head, 12.2 ov) · 222/2 (A. Sharma, 16.2 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
            { name: "Marco Jansen", overs: 2.0, maidens: 0, runs: 39, wickets: 0, econ: 19.50 },
            { name: "Yash Thakur", overs: 2.3, maidens: 0, runs: 40, wickets: 0, econ: 16.00 },
            { name: "Glenn Maxwell", overs: 3.0, maidens: 0, runs: 40, wickets: 0, econ: 13.33 },
            { name: "Lockie Ferguson", overs: 0.2, maidens: 0, runs: 1, wickets: 0, econ: 3.00 },
            { name: "Marcus Stoinis", overs: 0.4, maidens: 0, runs: 6, wickets: 0, econ: 9.00 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 58, wickets: 1, econ: 14.05 },
            { name: "Shashank Singh", overs: 2.0, maidens: 0, runs: 27, wickets: 0, econ: 13.50 }
        ]
    }
},
// Match 28 (index 27)
{
    team1: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '173/4', overs: '20' },
    team2: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '175/1', overs: '17.3' },
    status: 'RCB won by 9 wickets (15 balls left)',
    toss: "RCB won the toss and decided to bowl",
    venue: "Sawai Mansingh Stadium",
    pom: "Phil Salt", // Assuming based on performance
    innings1: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c & b Josh Hazlewood", runs: 75, balls: 47, fours: 10, sixes: 2, sr: 159.57 },
            { name: "Sanju Samson (C) (Wk)", out: "c Suyash Sharma b Krunal Pandya", runs: 15, balls: 19, fours: 1, sixes: 0, sr: 78.95 },
            { name: "Riyan Parag", out: "c & b Yash Dayal", runs: 36, balls: 22, fours: 3, sixes: 1, sr: 136.36 },
            { name: "Dhruv Jurel", out: "not out", runs: 35, balls: 23, fours: 2, sixes: 2, sr: 152.17 },
            { name: "Shimron Hetmyer", out: "c Devdutt Padikkal b Bhuvneshwar Kumar", runs: 9, balls: 8, fours: 1, sixes: 0, sr: 112.50 },
            { name: "Nitish Rana", out: "not out", runs: 4, balls: 1, fours: 1, sixes: 0, sr: 400.00 }
        ],
        extras: { total: 5, details: "(w 2, lb 3)" },
        total: { score: "173", details: "(4 wkts, 20 ov)" },
        yetToBat: "Wanindu Hasaranga, Jofra Archer, Maheesh Theekshana, Sandeep Sharma, Tushar Deshpande, Kumar Kartikeya (IP)",
        fow: "49/1 (S. Samson, 6.5 ov) · 105/2 (R. Parag, 13.2 ov) · 126/3 (Y. Jaiswal, 15.6 ov) · 168/4 (S. Hetmyer, 19.5 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
            { name: "Yash Dayal", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
            { name: "Josh Hazlewood", overs: 3.0, maidens: 0, runs: 28, wickets: 1, econ: 8.67 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 29, wickets: 1, econ: 7.25 },
            { name: "Liam Livingstone", overs: 1.0, maidens: 0, runs: 8, wickets: 0, econ: 8.00 },
            { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 39, wickets: 0, econ: 9.75 }
        ]
    },
    innings2: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "not out", runs: 76, balls: 53, fours: 8, sixes: 4, sr: 154.97 },
            { name: "Virat Kohli", out: "c Yashasvi Jaiswal b Kumar Kartikeya", runs: 52, balls: 45, fours: 4, sixes: 2, sr: 137.78 },
            { name: "Devdutt Padikkal (IP)", out: "not out", runs: 40, balls: 28, fours: 3, sixes: 1, sr: 142.86 }
        ],
        extras: { total: 8, details: "(nb 1, w 7)" },
        total: { score: "175", details: "(1 wkt, 17.3 ov)" },
        yetToBat: "Rajat Patidar (C), Liam Livingstone, Jitesh Sharma (Wk), Tim David, Krunal Pandya, Bhuvneshwar Kumar, Josh Hazlewood, Yash Dayal, Suyash Sharma",
        fow: "92/1 (V. Kohli, 8.4 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 36, wickets: 0, econ: 9.00 },
            { name: "Tushar Deshpande", overs: 2.0, maidens: 0, runs: 21, wickets: 0, econ: 10.50 },
            { name: "Sandeep Sharma", overs: 2.3, maidens: 0, runs: 29, wickets: 0, econ: 11.60 },
            { name: "Maheesh Theekshana", overs: 2.0, maidens: 0, runs: 21, wickets: 0, econ: 10.50 },
            { name: "Kumar Kartikeya (IP)", overs: 3.0, maidens: 0, runs: 25, wickets: 1, econ: 8.33 },
            { name: "Wanindu Hasaranga", overs: 3.0, maidens: 0, runs: 33, wickets: 0, econ: 11.00 },
            { name: "Riyan Parag", overs: 1.0, maidens: 0, runs: 10, wickets: 0, econ: 10.00 }
        ]
    }
},
// Match 29 (index 28)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '205/5', overs: '20' },
    team2: { name: 'DC', logo: 'Logos/dc_logo.png', score: '193', overs: '(19)' },
    status: 'MI won by 12 runs',
    toss: "DC won the toss and decided to bowl",
    venue: "Arun Jaitley",
    pom: "Tilak Varma", // Assuming based on performance
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Rohit Sharma", out: "c & b Vipraj Nigam", runs: 18, balls: 12, fours: 2, sixes: 1, sr: 150.00 },
            { name: "Ryan Rickelton (Wk)", out: "run out", runs: 41, balls: 25, fours: 5, sixes: 2, sr: 164.00 },
            { name: "Suryakumar Yadav", out: "c & b Kuldeep Yadav", runs: 40, balls: 28, fours: 5, sixes: 2, sr: 142.86 },
            { name: "Tilak Varma", out: "c Axar Patel b Mukesh Kumar", runs: 59, balls: 33, fours: 6, sixes: 3, sr: 178.79 },
            { name: "Hardik Pandya (C)", out: "c Tristan Stubbs b Vipraj Nigam", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Naman Dhir", out: "not out", runs: 38, balls: 17, fours: 3, sixes: 2, sr: 223.53 },
            { name: "Will Jacks", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 6, details: "(w 5, lb 1)" },
        total: { score: "205", details: "(5 wkts, 20 ov)" },
        yetToBat: "Mitchell Santner, Deepak Chahar, Trent Boult, Jasprit Bumrah, Satyanarayana Raju",
        fow: "47/1 (R. Sharma, 4.6 ov) · 75/2 (R. Rickelton, 7.4 ov) · 135/3 (S. Yadav, 13.1 ov) · 138/4 (H. Pandya, 14.1 ov) · 205/5 (T. Varma, 19.4 ov)",
        bowling: [
            { name: "Mitchell Starc", overs: 3.0, maidens: 0, runs: 43, wickets: 0, econ: 14.33 },
            { name: "Mukesh Kumar", overs: 4.0, maidens: 0, runs: 38, wickets: 1, econ: 9.50 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 41, wickets: 2, econ: 10.25 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 23, wickets: 2, econ: 5.75 },
            { name: "Axar Patel (C)", overs: 2.0, maidens: 0, runs: 19, wickets: 0, econ: 9.50 },
            { name: "Mohit Sharma", overs: 3.0, maidens: 0, runs: 45, wickets: 0, econ: 13.33 }
        ]
    },
    innings2: {
        teamName: 'Capitals',
        batting: [
            { name: "Jake Fraser-McGurk", out: "c Will Jacks b Deepak Chahar", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Abishek Porel", out: "c Will Jacks b Karn Sharma", runs: 33, balls: 25, fours: 3, sixes: 1, sr: 132.00 },
            { name: "Karun Nair (IP)", out: "not out", runs: 89, balls: 40, fours: 12, sixes: 5, sr: 222.50 },
            { name: "KL Rahul (Wk)", out: "c & b Karn Sharma", runs: 15, balls: 13, fours: 1, sixes: 0, sr: 115.38 },
            { name: "Axar Patel (C)", out: "c Suryakumar Yadav b Jasprit Bumrah", runs: 9, balls: 6, fours: 2, sixes: 0, sr: 150.00 },
            { name: "Tristan Stubbs", out: "run out", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 },
            { name: "Ashutosh Sharma", out: "c & b Mitchell Santner", runs: 17, balls: 14, fours: 2, sixes: 0, sr: 121.43 },
            { name: "Vipraj Nigam", out: "c Ryan Rickelton b Mitchell Santner", runs: 14, balls: 8, fours: 1, sixes: 1, sr: 175.00 },
            { name: "Mitchell Starc", out: "run out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Kuldeep Yadav", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Mohit Sharma", out: "run out (Mitchell Santner)", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 13, details: "(w 9, lb 4)" },
        total: { score: "193", details: "(10 wkts, 19 ov)" },
        yetToBat: "Mukesh Kumar",
        fow: "0/1 (J. Fraser-McGurk, 0.1 ov) · 115/2 (A. Porel, 10.2 ov) · 135/3 (K. Nair, 11.4 ov) · 144/4 (A. Patel, 12.4 ov) · 149/5 (T. Stubbs, 13.3 ov) · 180/6 (KL Rahul, 13.5 ov) · 180/7 (A. Sharma, 18.2 ov) · 188/8 (A. Sharma, 18.4 ov) · 190/9 (M. Starc, 18.5 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 3.0, maidens: 0, runs: 24, wickets: 1, econ: 8.00 },
            { name: "Trent Boult", overs: 2.0, maidens: 0, runs: 21, wickets: 0, econ: 10.50 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
            { name: "Mitchell Santner", overs: 4.0, maidens: 0, runs: 43, wickets: 2, econ: 10.75 },
            { name: "Hardik Pandya (C)", overs: 2.0, maidens: 0, runs: 21, wickets: 0, econ: 10.50 },
            { name: "Karn Sharma (IP)", overs: 4.0, maidens: 0, runs: 36, wickets: 3, econ: 9.00 }
        ]
    }
},
// Match 30 (index 29)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '180/2', overs: '19' },
    team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '176/6', overs: '20' },
    status: 'LSG won by 8 wickets (6 balls left)',
    toss: "LSG won the toss and decided to bowl",
    venue: "Ekana Cricket Stadium",
    pom: "KL Rahul",
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Rachin Ravindra", out: "b Mohsin Khan", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Ruturaj Gaikwad (C)", out: "c KL Rahul b Yash Thakur", runs: 17, balls: 13, fours: 3, sixes: 0, sr: 130.77 },
            { name: "Ajinkya Rahane", out: "b Krunal Pandya", runs: 36, balls: 24, fours: 5, sixes: 1, sr: 150.00 },
            { name: "Ravindra Jadeja", out: "not out", runs: 57, balls: 40, fours: 5, sixes: 1, sr: 142.50 },
            { name: "Shivam Dube", out: "c KL Rahul b Marcus Stoinis", runs: 3, balls: 8, fours: 0, sixes: 0, sr: 37.50 },
            { name: "Sameer Rizvi (IP)", out: "c & b Krunal Pandya", runs: 1, balls: 5, fours: 0, sixes: 0, sr: 20.00 },
            { name: "Moeen Ali", out: "b Ravi Bishnoi", runs: 30, balls: 20, fours: 0, sixes: 3, sr: 150.00 },
            { name: "MS Dhoni (Wk)", out: "not out", runs: 28, balls: 9, fours: 3, sixes: 2, sr: 311.11 }
        ],
        extras: { total: 4, details: "(lb 4)" },
        total: { score: "176", details: "(6 wkts, 20 ov)" },
        yetToBat: "Deepak Chahar, Tushar Deshpande, Mustafizur Rahman",
        fow: "4/1 (R. Ravindra, 1.3 ov) · 33/2 (R. Gaikwad, 4.2 ov) · 68/3 (A. Rahane, 8.3 ov) · 87/4 (S. Dube, 11.2 ov) · 90/5 (S. Rizvi, 12.2 ov) · 141/6 (M. Ali, 17.1 ov)",
        bowling: [
            { name: "Mohsin Khan", overs: 4, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
            { name: "Yash Thakur", overs: 4, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
            { name: "Ravi Bishnoi", overs: 4, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
            { name: "Marcus Stoinis", overs: 3, maidens: 0, runs: 29, wickets: 1, econ: 9.67 },
            { name: "Krunal Pandya", overs: 3, maidens: 0, runs: 16, wickets: 2, econ: 5.33 },
            { name: "Matt Henry", overs: 2, maidens: 0, runs: 13, wickets: 0, econ: 6.50 }
        ]
    },
    innings2: {
        teamName: 'Super Giants',
        batting: [
            { name: "Quinton de Kock (Wk)", out: "c Dhoni b Mustafizur Rahman", runs: 54, balls: 43, fours: 5, sixes: 1, sr: 125.58 },
            { name: "KL Rahul (C)", out: "c Jadeja b Matheesha Pathirana", runs: 82, balls: 53, fours: 9, sixes: 3, sr: 154.72 },
            { name: "Nicholas Pooran", out: "not out", runs: 23, balls: 12, fours: 3, sixes: 1, sr: 191.67 },
            { name: "Marcus Stoinis", out: "not out", runs: 8, balls: 5, fours: 1, sixes: 0, sr: 160.00 }
        ],
        extras: { total: 13, details: "(lb 2, w 11)" },
        total: { score: "180", details: "(2 wkts, 19 ov)" },
        yetToBat: "Deepak Hooda, Ayush Badoni, Krunal Pandya, Matt Henry, Ravi Bishnoi",
        fow: "134/1 (Q. de Kock, 14.6 ov) · 161/2 (KL Rahul, 17.1 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 3, maidens: 0, runs: 26, wickets: 0, econ: 8.67 },
            { name: "Mustafizur Rahman", overs: 4, maidens: 0, runs: 43, wickets: 1, econ: 10.75 },
            { name: "Tushar Deshpande", overs: 3, maidens: 0, runs: 34, wickets: 0, econ: 11.33 },
            { name: "Matheesha Pathirana", overs: 4, maidens: 0, runs: 29, wickets: 1, econ: 7.25 },
            { name: "Ravindra Jadeja", overs: 3, maidens: 0, runs: 32, wickets: 0, econ: 10.67 },
            { name: "Moeen Ali", overs: 2, maidens: 0, runs: 14, wickets: 0, econ: 7.00 }
        ]
    }
},
// Match 31 (index 30)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '111', overs: '(15.3)' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '95', overs: '(15.1)' },
    status: 'PBKS won by 16 runs',
    toss: "PBKS won the toss and decided to bat",
    venue: "PCA New Cricket Stadium",
    pom: "Priyansh Arya", // Assuming based on performance
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "c Ajinkya Rahane b Harshit Rana", runs: 22, balls: 12, fours: 3, sixes: 1, sr: 183.33 },
            { name: "Prabhsimran Singh (Wk)", out: "c Ramandeep Singh b Harshit Rana", runs: 30, balls: 15, fours: 2, sixes: 3, sr: 200.00 },
            { name: "Shreyas Iyer (C)", out: "c Ramandeep Singh b Harshit Rana", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Josh Inglis (Wk)", out: "c & b Varun Chakravarthy", runs: 2, balls: 6, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Nehal Wadhera", out: "c Venkatesh Iyer b Anrich Nortje", runs: 10, balls: 9, fours: 2, sixes: 0, sr: 111.11 },
            { name: "Glenn Maxwell", out: "c & b Varun Chakravarthy", runs: 7, balls: 10, fours: 1, sixes: 0, sr: 70.00 },
            { name: "Suryansh Shedge (P)", out: "c & b Sunil Narine", runs: 4, balls: 4, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Shashank Singh", out: "not out", runs: 18, balls: 17, fours: 1, sixes: 1, sr: 105.88 },
            { name: "Marco Jansen", out: "b Sunil Narine", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Xavier Bartlett", out: "run out (Venkatesh Iyer)", runs: 11, balls: 15, fours: 1, sixes: 0, sr: 73.33 },
            { name: "Arshdeep Singh", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 5, details: "(w 3, b 2)" },
        total: { score: "111", details: "(10 wkts, 15.3 ov)" },
        yetToBat: "Yuzvendra Chahal",
        fow: "39/1 (P. Arya, 3.2 ov) · 39/2 (S. Iyer, 3.4 ov) · 42/3 (J. Inglis, 4.5 ov) · 54/4 (P. Singh, 5.6 ov) · 65/5 (N. Wadhera, 7.3 ov) · 76/6 (G. Maxwell, 9.1 ov) · 80/7 (S. Shedge, 10.3 ov) · 86/8 (M. Jansen, 10.6 ov) · 109/9 (S. Singh, 15.1 ov) · 111/10 (X. Bartlett, 15.3 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 2.3, maidens: 0, runs: 26, wickets: 1, econ: 10.40 },
            { name: "Anrich Nortje", overs: 3.0, maidens: 0, runs: 23, wickets: 1, econ: 7.67 },
            { name: "Harshit Rana", overs: 3.0, maidens: 0, runs: 25, wickets: 3, econ: 8.33 },
            { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 21, wickets: 2, econ: 5.25 },
            { name: "Sunil Narine", overs: 3.0, maidens: 0, runs: 14, wickets: 2, econ: 4.67 }
        ]
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Quinton de Kock (Wk)", out: "b Suryansh Shedge b Xavier Bartlett", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Sunil Narine", out: "b Marco Jansen", runs: 5, balls: 4, fours: 1, sixes: 0, sr: 125.00 },
            { name: "Ajinkya Rahane (IP)", out: "c Nehal Wadhera b Yuzvendra Chahal", runs: 17, balls: 17, fours: 1, sixes: 1, sr: 100.00 },
            { name: "Angkrish Raghuvanshi (IP)", out: "c Suryansh Shedge b Yuzvendra Chahal", runs: 37, balls: 28, fours: 5, sixes: 1, sr: 132.14 },
            { name: "Venkatesh Iyer", out: "c & b Glenn Maxwell", runs: 7, balls: 4, fours: 0, sixes: 0, sr: 175.00 },
            { name: "Rinku Singh", out: "c Glenn Maxwell b Yuzvendra Chahal", runs: 2, balls: 9, fours: 0, sixes: 0, sr: 22.22 },
            { name: "Andre Russell", out: "not out", runs: 17, balls: 11, fours: 1, sixes: 2, sr: 154.55 },
            { name: "Ramandeep Singh", out: "c Shreyas Iyer b Yuzvendra Chahal", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Harshit Rana", out: "c & b Marco Jansen", runs: 3, balls: 6, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Vaibhav Arora", out: "c Priyansh Arya b Arshdeep Singh", runs: 0, balls: 7, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Anrich Nortje", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 5, details: "(w 1, lb 4)" },
        total: { score: "95", details: "(10 wkts, 15.1 ov)" },
        yetToBat: "Varun Chakravarthy",
        fow: "7/1 (S. Narine, 0.6 ov) · 7/2 (Q. de Kock, 1.2 ov) · 62/3 (A. Rahane, 7.4 ov) · 72/4 (A. Raghuvanshi, 9.1 ov) · 74/5 (V. Iyer, 10.4 ov) · 76/6 (R. Singh, 11.3 ov) · 78/7 (R. Singh, 11.4 ov) · 78/8 (H. Rana, 12.4 ov) · 80/9 (V. Arora, 14.6 ov) · 95/10 (A. Russell, 15.1 ov)",
        bowling: [
            { name: "Marco Jansen", overs: 3.1, maidens: 0, runs: 17, wickets: 3, econ: 5.37 },
            { name: "Xavier Bartlett", overs: 3.0, maidens: 0, runs: 30, wickets: 1, econ: 10.00 },
            { name: "Arshdeep Singh", overs: 3.0, maidens: 0, runs: 11, wickets: 1, econ: 3.67 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 28, wickets: 4, econ: 7.00 },
            { name: "Glenn Maxwell", overs: 2.0, maidens: 0, runs: 5, wickets: 1, econ: 2.50 }
        ]
    }
},
// Match 32 (index 31)
{
    team1: { name: 'DC', logo: 'Logos/dc_logo.png', score: '188/5', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '188/4', overs: '20' },
    status: 'DC won the Super Over (2 balls left)',
    toss: "RR won the toss and decided to bowl",
    venue: "Arun Jaitley",
    pom: "Axar Patel", // Assuming based on performance
    innings1: {
        teamName: 'Capitals',
        batting: [
            { name: "Jake Fraser-McGurk", out: "c Yashasvi Jaiswal b Jofra Archer", runs: 9, balls: 6, fours: 2, sixes: 0, sr: 150.00 },
            { name: "Abishek Porel", out: "c Riyan Parag b Wanindu Hasaranga", runs: 49, balls: 37, fours: 5, sixes: 1, sr: 132.43 },
            { name: "Karun Nair", out: "c & b Wanindu Hasaranga", runs: 0, balls: 3, fours: 0, sixes: 0, sr: 0.00 },
            { name: "KL Rahul (Wk)", out: "c Shimron Hetmyer b Jofra Archer", runs: 38, balls: 32, fours: 2, sixes: 2, sr: 118.75 },
            { name: "Tristan Stubbs", out: "not out", runs: 34, balls: 18, fours: 2, sixes: 2, sr: 188.89 },
            { name: "Axar Patel (C)", out: "c Dhruv Jurel b Maheesh Theekshana", runs: 34, balls: 14, fours: 4, sixes: 2, sr: 242.86 },
            { name: "Ashutosh Sharma", out: "not out", runs: 15, balls: 11, fours: 2, sixes: 0, sr: 136.36 }
        ],
        extras: { total: 9, details: "(nb 1, w 7, lb 1)" },
        total: { score: "188", details: "(5 wkts, 20 ov)" },
        yetToBat: "Vipraj Nigam, Mitchell Starc, Kuldeep Yadav, Mohit Sharma, Mukesh Kumar",
        fow: "9/1 (J. Fraser-McGurk, 2.3 ov) · 34/2 (K. Nair, 5.1 ov) · 97/3 (KL Rahul, 12.4 ov) · 105/4 (A. Porel, 13.5 ov) · 149/5 (A. Patel, 16.4 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 32, wickets: 2, econ: 8.00 },
            { name: "Tushar Deshpande", overs: 3.0, maidens: 0, runs: 38, wickets: 0, econ: 12.67 },
            { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 33, wickets: 0, econ: 8.25 },
            { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
            { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 38, wickets: 1, econ: 9.50 },
            { name: "Riyan Parag", overs: 1.0, maidens: 0, runs: 6, wickets: 0, econ: 6.00 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Mitchell Starc b Kuldeep Yadav", runs: 51, balls: 37, fours: 3, sixes: 4, sr: 137.84 },
            { name: "Sanju Samson (C-Wk)", out: "c Mitchell Starc b Kuldeep Yadav", runs: 31, balls: 19, fours: 2, sixes: 3, sr: 163.16 },
            { name: "Riyan Parag", out: "run out", runs: 8, balls: 11, fours: 1, sixes: 0, sr: 72.73 },
            { name: "Nitish Rana", out: "c & b Mitchell Starc", runs: 51, balls: 28, fours: 6, sixes: 2, sr: 182.14 },
            { name: "Dhruv Jurel", out: "run out (Axar Patel)", runs: 26, balls: 17, fours: 0, sixes: 2, sr: 152.94 },
            { name: "Shimron Hetmyer", out: "not out", runs: 15, balls: 9, fours: 1, sixes: 0, sr: 166.67 }
        ],
        extras: { total: 6, details: "(nb 1, w 3, b 1, lb 1)" },
        total: { score: "188", details: "(4 wkts, 20 ov)" },
        yetToBat: "Wanindu Hasaranga, Jofra Archer, Maheesh Theekshana, Sandeep Sharma, Tushar Deshpande",
        fow: "78/1 (R. Parag, 9.1 ov) · 112/2 (Y. Jaiswal, 13.2 ov) · 161/3 (N. Rana, 17.4 ov) · 188/4 (D. Jurel, 19.5 ov)",
        bowling: [
            { name: "Mitchell Starc", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
            { name: "Mukesh Kumar", overs: 3.0, maidens: 0, runs: 31, wickets: 0, econ: 10.33 },
            { name: "Mohit Sharma", overs: 4.0, maidens: 0, runs: 38, wickets: 0, econ: 9.50 },
            { name: "Vipraj Nigam", overs: 1.0, maidens: 0, runs: 13, wickets: 0, econ: 13.00 },
            { name: "Axar Patel (C)", overs: 3.0, maidens: 0, runs: 23, wickets: 1, econ: 7.67 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 33, wickets: 1, econ: 8.25 },
            { name: "Tristan Stubbs", overs: 1.0, maidens: 0, runs: 12, wickets: 0, econ: 12.00 }
        ]
    }
},
// Match 33 (index 32)
{
    team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '162/5', overs: '20' },
    team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '166/6', overs: '18.1' },
    status: 'MI won by 4 wickets (11 balls left)',
    toss: "MI won the toss and decided to bowl",
    venue: "Wankhede Stadium",
    pom: "Ryan Rickelton", // Assuming based on performance
    innings1: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Abhishek Sharma", out: "c & b Hardik Pandya", runs: 28, balls: 20, fours: 4, sixes: 0, sr: 140.00 },
            { name: "Travis Head", out: "c Mitchell Santner b Will Jacks", runs: 29, balls: 29, fours: 3, sixes: 0, sr: 96.55 },
            { name: "Ishan Kishan", out: "c & b Will Jacks", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Nitish Kumar Reddy", out: "c Tilak Varma b Trent Boult", runs: 19, balls: 21, fours: 1, sixes: 0, sr: 90.48 },
            { name: "Heinrich Klaasen (Wk)", out: "c & b Jasprit Bumrah", runs: 37, balls: 28, fours: 3, sixes: 2, sr: 132.14 },
            { name: "Aniket Verma", out: "not out", runs: 18, balls: 8, fours: 0, sixes: 2, sr: 225.00 },
            { name: "Pat Cummins (C)", out: "not out", runs: 8, balls: 4, fours: 0, sixes: 1, sr: 200.00 }
        ],
        extras: { total: 10, details: "(nb 1, w 8, b 1)" },
        total: { score: "162", details: "(5 wkts, 20 ov)" },
        yetToBat: "Harshal Patel, Mohammed Shami, Zeeshan Ansari, Eshan Malinga, Rahul Chahar",
        fow: "50/1 (A. Sharma, 7.3 ov) · 68/2 (I. Kishan, 8.4 ov) · 82/3 (T. Head, 11.1 ov) · 113/4 (N. K. Reddy, 15.6 ov) · 136/5 (H. Klaasen, 18.1 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 4.0, maidens: 0, runs: 47, wickets: 0, econ: 11.75 },
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 29, wickets: 1, econ: 7.25 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 21, wickets: 1, econ: 5.25 },
            { name: "Will Jacks", overs: 3.0, maidens: 0, runs: 14, wickets: 2, econ: 4.67 },
            { name: "Hardik Pandya (C)", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
            { name: "Mitchell Santner", overs: 1.0, maidens: 0, runs: 8, wickets: 0, econ: 8.00 }
        ]
    },
    innings2: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c Travis Head b Harshal Patel", runs: 31, balls: 23, fours: 5, sixes: 0, sr: 134.78 },
            { name: "Rohit Sharma", out: "not out", runs: 28, balls: 16, fours: 0, sixes: 3, sr: 162.50 },
            { name: "Will Jacks", out: "c & b Pat Cummins", runs: 36, balls: 26, fours: 3, sixes: 2, sr: 138.46 },
            { name: "Suryakumar Yadav", out: "c Heinrich Klaasen b Pat Cummins", runs: 26, balls: 15, fours: 2, sixes: 2, sr: 173.33 },
            { name: "Tilak Varma", out: "not out", runs: 21, balls: 17, fours: 2, sixes: 0, sr: 123.53 },
            { name: "Hardik Pandya (C)", out: "c Ishan Kishan b Eshan Malinga", runs: 21, balls: 9, fours: 3, sixes: 1, sr: 233.33 }
        ],
        extras: { total: 5, details: "(nb 1, w 3, lb 1)" },
        total: { score: "166", details: "(6 wkts, 18.1 ov)" },
        yetToBat: "Deepak Chahar, Trent Boult, Jasprit Bumrah, Karn Sharma",
        fow: "32/1 (R. Sharma, 3.1 ov) · 69/2 (R. Rickelton, 7.5 ov) · 121/3 (S. Yadav, 12.4 ov) · 128/4 (W. Jacks, 14.3 ov) · 150/5 (H. Pandya, 17.2 ov) · 158/6 (N. Dhir, 17.5 ov)",
        bowling: [
            { name: "Mohammed Shami", overs: 3.0, maidens: 0, runs: 28, wickets: 0, econ: 9.33 },
            { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 28, wickets: 3, econ: 8.50 },
            { name: "Eshan Malinga", overs: 4.0, maidens: 0, runs: 36, wickets: 2, econ: 9.00 },
            { name: "Zeeshan Ansari", overs: 3.1, maidens: 0, runs: 35, wickets: 0, econ: 11.05 },
            { name: "Harshal Patel", overs: 3.0, maidens: 0, runs: 31, wickets: 1, econ: 10.33 },
            { name: "Rahul Chahar", overs: 1.0, maidens: 0, runs: 9, wickets: 0, econ: 9.00 }
        ]
    }
},
// Match 34 (index 33)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '95/9', overs: '14' },
    team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '98/5', overs: '12.1' },
    status: 'PBKS won by 5 wickets (11 balls left)',
    toss: "PBKS won the toss and decided to bowl",
    venue: "M. Chinnaswamy Stadium",
    pom: "Shashank Singh", // Assuming based on winning knock
    innings1: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c & b Arshdeep Singh", runs: 4, balls: 4, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Virat Kohli", out: "c Marco Jansen b Arshdeep Singh", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Rajat Patidar (C)", out: "c Jitesh Sharma b Yuzvendra Chahal", runs: 23, balls: 18, fours: 1, sixes: 1, sr: 127.78 },
            { name: "Liam Livingstone", out: "c Jitesh Sharma b Xavier Bartlett", runs: 4, balls: 6, fours: 1, sixes: 0, sr: 66.67 },
            { name: "Jitesh Sharma (Wk)", out: "c Nehal Wadhera b Yuzvendra Chahal", runs: 2, balls: 7, fours: 0, sixes: 0, sr: 28.57 },
            { name: "Krunal Pandya", out: "c & b Marco Jansen", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Tim David", out: "not out", runs: 50, balls: 26, fours: 5, sixes: 3, sr: 192.31 },
            { name: "Manoj Bhandage (IP)", out: "c & b Marco Jansen", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 },
            { name: "Bhuvneshwar Kumar", out: "c Xavier Bartlett b Harpreet Brar", runs: 8, balls: 13, fours: 1, sixes: 0, sr: 61.54 },
            { name: "Yash Dayal", out: "c Marco Jansen b Harpreet Brar", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Josh Hazlewood", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 1, details: "(nb 1)" },
        total: { score: "95", details: "(9 wkts, 14 ov)" },
        yetToBat: "Suyash Sharma",
        fow: "4/1 (P. Salt, 0.4 ov) · 21/2 (V. Kohli, 2.4 ov) · 25/3 (L. Livingstone, 3.6 ov) · 32/4 (J. Sharma, 5.2 ov) · 33/5 (K. Pandya, 5.4 ov) · 41/6 (M. Bhandage, 7.2 ov) · 82/7 (B. Kumar, 11.4 ov) · 83/8 (Y. Dayal, 11.5 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 3.0, maidens: 0, runs: 23, wickets: 2, econ: 7.67 },
            { name: "Xavier Bartlett", overs: 3.0, maidens: 0, runs: 26, wickets: 1, econ: 8.67 },
            { name: "Marco Jansen", overs: 3.0, maidens: 0, runs: 16, wickets: 2, econ: 5.33 },
            { name: "Yuzvendra Chahal", overs: 3.0, maidens: 0, runs: 11, wickets: 2, econ: 3.67 },
            { name: "Harpreet Brar", overs: 2.0, maidens: 0, runs: 25, wickets: 2, econ: 12.50 }
        ]
    },
    innings2: {
        teamName: 'Kings',
        batting: [
            { name: "Prabhsimran Arya", out: "c Tim David b Josh Hazlewood", runs: 15, balls: 11, fours: 1, sixes: 1, sr: 136.36 },
            { name: "Prabhsimran Singh (C)", out: "c J. Sharma b Bhuvneshwar Kumar", runs: 13, balls: 9, fours: 2, sixes: 0, sr: 144.44 },
            { name: "Shreyas Iyer", out: "c Jitesh Sharma b Josh Hazlewood", runs: 7, balls: 10, fours: 0, sixes: 0, sr: 70.00 },
            { name: "Josh Inglis (Wk)", out: "c Jitesh Sharma b Yash Dayal", runs: 14, balls: 17, fours: 2, sixes: 0, sr: 82.35 },
            { name: "Shashank Wadhera", out: "not out", runs: 33, balls: 19, fours: 3, sixes: 3, sr: 173.68 },
            { name: "Arshdeep Singh", out: "c Phil Salt b Bhuvneshwar Kumar", runs: 1, balls: 5, fours: 0, sixes: 0, sr: 20.00 },
            { name: "Marcus Stoinis", out: "not out", runs: 7, balls: 2, fours: 0, sixes: 1, sr: 350.00 }
        ],
        extras: { total: 7, details: "(w 2, b 4, lb 1)" },
        total: { score: "98", details: "(5 wkts, 12.1 ov)" },
        yetToBat: "Marco Jansen, Harpreet Brar, Xavier Bartlett, Arshdeep Singh, Yuzvendra Chahal",
        fow: "22/1 (P. Singh, 2.4 ov) · 32/2 (P. Arya, 3.4 ov) · 52/3 (S. Iyer, 7.4 ov) · 53/4 (J. Inglis, 7.6 ov) · 81/5 (A. Singh, 11.2 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 3.0, maidens: 0, runs: 28, wickets: 2, econ: 9.33 },
            { name: "Yash Dayal", overs: 2.1, maidens: 0, runs: 18, wickets: 0, econ: 8.57 },
            { name: "Josh Hazlewood", overs: 3.0, maidens: 0, runs: 14, wickets: 3, econ: 4.67 },
            { name: "Krunal Pandya", overs: 1.0, maidens: 0, runs: 16, wickets: 0, econ: 16.00 },
            { name: "Suyash Sharma", overs: 3.0, maidens: 0, runs: 25, wickets: 0, econ: 8.33 }
        ]
    }
},
// Match 35 (index 34)
{
    team1: { name: 'DC', logo: 'dc_logo.jpg', score: '203/8', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '204/3', overs: '19.2' },
    status: 'GT won by 7 wickets (4 balls left)',
    toss: "GT won the toss and decided to bowl",
    venue: "Narendra Modi Stadium",
    pom: "Jos Buttler", // Assuming based on performance
    innings1: {
        teamName: 'Capitals',
        batting: [
            { name: "Abishek Porel", out: "c Mohammed Siraj b Arshad Khan", runs: 18, balls: 9, fours: 3, sixes: 1, sr: 200.00 },
            { name: "Kevon Nair", out: "c Arshad Khan b Prasidh Krishna", runs: 31, balls: 18, fours: 2, sixes: 2, sr: 172.22 },
            { name: "KL Rahul (Wk)", out: "run out (Buttler)", runs: 28, balls: 14, fours: 4, sixes: 1, sr: 200.00 },
            { name: "Axar Patel (C)", out: "c Jos Buttler b Prasidh Krishna", runs: 39, balls: 32, fours: 1, sixes: 2, sr: 121.88 },
            { name: "Tristan Stubbs", out: "c Prasidh Krishna b Mohammed Siraj", runs: 31, balls: 21, fours: 2, sixes: 1, sr: 147.62 },
            { name: "Ashutosh Sharma", out: "c & b Prasidh Krishna", runs: 37, balls: 19, fours: 2, sixes: 3, sr: 194.74 },
            { name: "Vipraj Nigam", out: "c Jos Buttler b Prasidh Krishna", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Donovan Ferreira (IP)", out: "c Sai Kishore b Ishant Sharma", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Mitchell Starc", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Kuldeep Yadav", out: "not out", runs: 4, balls: 1, fours: 1, sixes: 0, sr: 400.00 }
        ],
        extras: { total: 12, details: "(w 9, lb 3)" },
        total: { score: "203", details: "(8 wkts, 20 ov)" },
        yetToBat: "Mohit Sharma, Mukesh Kumar",
        fow: "23/1 (A. Porel, 1.4 ov) · 58/2 (K. Rahul, 4.4 ov) · 93/3 (K. Nair, 8.2 ov) · 146/4 (T. Stubbs, 14.2 ov) · 173/5 (A. Patel, 17.1 ov) · 173/6 (V. Nigam, 17.2 ov) · 191/7 (D. Ferreira, 18.4 ov) · 195/8 (A. Sharma, 19.5 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 47, wickets: 1, econ: 11.75 },
            { name: "Arshad Khan", overs: 4.0, maidens: 0, runs: 46, wickets: 1, econ: 11.50 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 41, wickets: 4, econ: 10.25 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 38, wickets: 0, econ: 9.50 },
            { name: "Ishant Sharma", overs: 3.0, maidens: 0, runs: 19, wickets: 1, econ: 6.33 },
            { name: "Sai Kishore", overs: 1.0, maidens: 0, runs: 9, wickets: 1, econ: 9.00 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Tristan Stubbs b Kuldeep Yadav", runs: 35, balls: 21, fours: 5, sixes: 1, sr: 171.43 },
            { name: "Shubman Gill (C)", out: "run out (Kevon Nair)", runs: 7, balls: 5, fours: 1, sixes: 0, sr: 140.00 },
            { name: "Jos Buttler (Wk)", out: "not out", runs: 97, balls: 54, fours: 11, sixes: 4, sr: 179.63 },
            { name: "Sherfane Rutherford (IP)", out: "c Mitchell Starc b Mukesh Kumar", runs: 43, balls: 34, fours: 1, sixes: 3, sr: 126.47 },
            { name: "Rahul Tewatia", out: "not out", runs: 11, balls: 3, fours: 1, sixes: 1, sr: 366.67 }
        ],
        extras: { total: 10, details: "(nb 1, w 4, lb 5)" },
        total: { score: "204", details: "(3 wkts, 19.2 ov)" },
        yetToBat: "Shahrukh Khan, Rashid Khan, Arshad Khan, Sai Kishore, Mohammed Siraj, Prasidh Krishna, Ishant Sharma",
        fow: "14/1 (S. Gill, 1.4 ov) · 74/2 (S. Sudharsan, 7.3 ov) · 193/3 (S. Rutherford, 18.5 ov)",
        bowling: [
            { name: "Mitchell Starc", overs: 3.2, maidens: 0, runs: 49, wickets: 0, econ: 14.70 },
            { name: "Mukesh Kumar", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
            { name: "Axar Patel (C)", overs: 2.0, maidens: 0, runs: 18, wickets: 0, econ: 9.00 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 34, wickets: 0, econ: 8.50 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Mohit Sharma", overs: 2.0, maidens: 0, runs: 28, wickets: 0, econ: 14.00 }
        ]
    }
},
// Match 36 (index 35)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '180/9', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '178/5', overs: '20' },
    status: 'LSG won by 2 runs',
    toss: "LSG won the toss and decided to bat",
    venue: "Sawai Mansingh Stadium",
    pom: "Glenn Maxwell", // Assuming based on performance
    innings1: {
        teamName: 'Super Giants',
        batting: [
            { name: "Mitchell Marsh", out: "c Jofra Archer b Jofra Archer", runs: 4, balls: 6, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Glenn Maxwell", out: "c Riyan Parag b Wanindu Hasaranga", runs: 86, balls: 45, fours: 5, sixes: 3, sr: 191.11 },
            { name: "Nicholas Pooran", out: "c Jos Buttler b Wanindu Hasaranga", runs: 11, balls: 8, fours: 2, sixes: 0, sr: 137.50 },
            { name: "KL Rahul (C)(Wk)", out: "c Dhruv Jurel b Wanindu Hasaranga", runs: 3, balls: 9, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Ayush Badoni", out: "c Shivam Dubey b Tushar Deshpande", runs: 50, balls: 34, fours: 5, sixes: 1, sr: 147.06 },
            { name: "David Miller", out: "not out", runs: 7, balls: 8, fours: 0, sixes: 0, sr: 87.50 },
            { name: "Abdul Samad", out: "not out", runs: 30, balls: 10, fours: 0, sixes: 4, sr: 300.00 }
        ],
        extras: { total: 9, details: "(W 5, LB 4)" },
        total: { score: "180", details: "(9 wkts, 20 ov)" },
        yetToBat: "Shardul Thakur, Prince Yadav, Digvesh Rathi, Ravi Bishnoi, Avesh Khan",
        fow: "16/1 (M. Marsh, 2.2 ov) · 46/2 (N. Pooran, 5.2 ov) · 52/3 (KL Rahul, 7.4 ov) · 54/4 (R. Pant, 7.4 ov) · 130/4 (A. Markram, 15.5 ov) · 143/5 (A. Badoni, 17.3 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
            { name: "Maheesh Theekshana", overs: 4.0, maidens: 0, runs: 32, wickets: 0, econ: 8.00 },
            { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 55, wickets: 1, econ: 13.75 },
            { name: "Tushar Deshpande", overs: 4.0, maidens: 0, runs: 26, wickets: 1, econ: 6.50 },
            { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 31, wickets: 2, econ: 7.75 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Aiden Markram b Avesh Khan", runs: 74, balls: 52, fours: 5, sixes: 4, sr: 142.31 },
            { name: "Venkatesh Suryavanshi", out: "c Aiden Markram b Avesh Khan", runs: 34, balls: 20, fours: 2, sixes: 3, sr: 170.00 },
            { name: "Nitish Rana", out: "c Avesh Khan b Shardul Thakur", runs: 8, balls: 7, fours: 0, sixes: 1, sr: 114.29 },
            { name: "Riyan Parag", out: "c & b Prince Yadav", runs: 39, balls: 26, fours: 3, sixes: 2, sr: 150.00 },
            { name: "Dhruv Jurel (Wk)", out: "not out", runs: 6, balls: 5, fours: 0, sixes: 0, sr: 120.00 },
            { name: "Shimron Hetmyer", out: "c Shardul Thakur b Avesh Khan", runs: 12, balls: 7, fours: 2, sixes: 0, sr: 171.43 },
            { name: "Shivam Dubey", out: "not out", runs: 3, balls: 3, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 2, details: "(W 1, LB 1)" },
        total: { score: "178", details: "(5 wkts, 20 ov)" },
        yetToBat: "Wanindu Hasaranga, Jofra Archer, Maheesh Theekshana, Tushar Deshpande, Sandeep Sharma",
        fow: "85/1 (V. Suryavanshi, 8.4 ov) · 94/2 (N. Rana, 9.6 ov) · 158/3 (Y. Jaiswal, 17.1 ov) · 165/4 (R. Parag, 17.6 ov) · 175/5 (S. Hetmyer, 19.3 ov)",
        bowling: [
            { name: "Shardul Thakur", overs: 4.0, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
            { name: "Avesh Khan", overs: 3.0, maidens: 0, runs: 34, wickets: 1, econ: 11.33 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 30, wickets: 0, econ: 7.50 },
            { name: "Aiden Markram", overs: 2.0, maidens: 0, runs: 18, wickets: 1, econ: 9.00 },
            { name: "Prince Yadav", overs: 4.0, maidens: 0, runs: 38, wickets: 0, econ: 9.50 },
            { name: "Ravi Bishnoi", overs: 3.0, maidens: 0, runs: 19, wickets: 0, econ: 6.33 }
        ]
    }
},
// Match 37 (index 36)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '157/6', overs: '20' },
    team2: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '158/3', overs: '18.5' },
    status: 'RCB won by 7 wickets (7 balls left)',
    toss: "RCB won the toss and decided to bowl",
    venue: "PCA New Cricket Stadium",
    pom: "Virat Kohli", // Assuming based on performance
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Prithvi Arya", out: "c Tim David b Krunal Pandya", runs: 22, balls: 15, fours: 3, sixes: 1, sr: 146.67 },
            { name: "Prabhsimran Singh", out: "c Tim David b Krunal Pandya", runs: 33, balls: 17, fours: 5, sixes: 1, sr: 194.12 },
            { name: "Shreyas Iyer", out: "c & b Romario Shepherd", runs: 6, balls: 10, fours: 1, sixes: 0, sr: 60.00 },
            { name: "Josh Inglis (Wk)", out: "c & b Romario Shepherd", runs: 29, balls: 17, fours: 2, sixes: 1, sr: 170.59 },
            { name: "Nehal Wadhera", out: "run out (Tim David)", runs: 5, balls: 6, fours: 0, sixes: 0, sr: 83.33 },
            { name: "Shashank Singh", out: "not out", runs: 31, balls: 33, fours: 1, sixes: 0, sr: 93.94 },
            { name: "Marcus Stoinis", out: "c & b Suyash Sharma", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Marco Jansen", out: "not out", runs: 25, balls: 20, fours: 0, sixes: 2, sr: 125.00 }
        ],
        extras: { total: 5, details: "(W 4, LB 1)" },
        total: { score: "157", details: "(6 wkts, 20 ov)" },
        yetToBat: "Xavier Bartlett, Arshdeep Singh, Yuzvendra Chahal, Harpreet Brar",
        fow: "42/1 (P. Arya, 4.2 ov) · 52/2 (P. Singh, 5.1 ov) · 55/3 (S. Iyer, 7.4 ov) · 76/4 (N. Wadhera, 9.6 ov) · 112/5 (J. Inglis, 15.2 ov) · 114/6 (M. Stoinis, 15.5 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 28, wickets: 0, econ: 6.50 },
            { name: "Yash Dayal", overs: 2.0, maidens: 0, runs: 22, wickets: 0, econ: 11.00 },
            { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 39, wickets: 0, econ: 9.75 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
            { name: "Romario Shepherd", overs: 2.0, maidens: 0, runs: 18, wickets: 1, econ: 9.00 },
            { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 26, wickets: 2, econ: 6.50 }
        ]
    },
    innings2: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c Josh Inglis b Arshdeep Singh", runs: 3, balls: 9, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Virat Kohli", out: "not out", runs: 73, balls: 54, fours: 7, sixes: 1, sr: 135.19 },
            { name: "Devdutt Padikkal", out: "c Arshdeep Singh b Harpreet Brar", runs: 61, balls: 35, fours: 5, sixes: 4, sr: 174.29 },
            { name: "Rajat Patidar (C)", out: "c Jitesh Sharma b Yuzvendra Chahal", runs: 12, balls: 13, fours: 1, sixes: 0, sr: 92.31 },
            { name: "Jitesh Sharma (Wk)", out: "not out", runs: 11, balls: 8, fours: 0, sixes: 1, sr: 137.50 }
        ],
        extras: { total: 1, details: "(W 1)" },
        total: { score: "158", details: "(3 wkts, 18.5 ov)" },
        yetToBat: "Romario Shepherd, Tim David, Krunal Pandya, Bhuvneshwar Kumar, Josh Hazlewood, Yash Dayal, Suyash Sharma",
        fow: "6/1 (P. Salt, 0.6 ov) · 109/2 (D. Padikkal, 12.3 ov) · 143/3 (R. Patidar, 16.4 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 3.0, maidens: 0, runs: 26, wickets: 1, econ: 8.67 },
            { name: "Xavier Bartlett", overs: 3.0, maidens: 0, runs: 28, wickets: 0, econ: 9.33 },
            { name: "Harpreet Brar", overs: 4.0, maidens: 0, runs: 27, wickets: 1, econ: 6.75 },
            { name: "Marco Jansen", overs: 3.0, maidens: 0, runs: 26, wickets: 0, econ: 8.67 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
            { name: "Marcus Stoinis", overs: 1.0, maidens: 0, runs: 13, wickets: 0, econ: 13.00 },
            { name: "Nehal Wadhera", overs: 0.5, maidens: 0, runs: 9, wickets: 0, econ: 10.80 }
        ]
    }
},
// Match 38 (index 37)
{
    team1: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '176/5', overs: '20' },
    team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '177/1', overs: '15.4' },
    status: 'MI won by 9 wickets (26 balls left)',
    toss: "MI won the toss and decided to bowl",
    venue: "Wankhede Stadium",
    pom: "Suryakumar Yadav", // Assuming based on performance
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Shaik Rasheed", out: "c Ryan Rickelton b Mitchell Santner", runs: 29, balls: 31, fours: 3, sixes: 0, sr: 96.00 },
            { name: "Ruturaj Gaikwad", out: "c Ryan Rickelton b Ashwani Kumar", runs: 5, balls: 9, fours: 0, sixes: 0, sr: 55.56 },
            { name: "Ayush Mishra", out: "c Jasprit Bumrah b Deepak Chahar", runs: 32, balls: 15, fours: 4, sixes: 2, sr: 213.33 },
            { name: "Ravindra Jadeja", out: "not out", runs: 53, balls: 35, fours: 4, sixes: 2, sr: 151.43 },
            { name: "Shivam Dube", out: "c Will Jacks b Jasprit Bumrah", runs: 36, balls: 32, fours: 2, sixes: 4, sr: 156.25 },
            { name: "MS Dhoni (C)(Wk)", out: "c Tilak Varma b Jasprit Bumrah", runs: 4, balls: 6, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Jamie Overton", out: "not out", runs: 4, balls: 3, fours: 1, sixes: 0, sr: 133.33 }
        ],
        extras: { total: 9, details: "(W 6, LB 3)" },
        total: { score: "176", details: "(5 wkts, 20 ov)" },
        yetToBat: "Vijay Shankar, Noor Ahmad, Khaleel Ahmed, Matheesha Pathirana, Ravichandran Ashwin",
        fow: "18/1 (R. Gaikwad, 3.1 ov) · 51/2 (A. Mishra, 6.5 ov) · 63/3 (S. Rasheed, 7.6 ov) · 142/4 (S. Dube, 16.2 ov) · 159/5 (MS Dhoni, 18.4 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 4.0, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 43, wickets: 0, econ: 10.75 },
            { name: "Ashwani Kumar", overs: 2.0, maidens: 0, runs: 42, wickets: 1, econ: 21.00 },
            { name: "Mitchell Santner", overs: 3.0, maidens: 0, runs: 14, wickets: 1, econ: 4.67 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
            { name: "Will Jacks", overs: 1.0, maidens: 0, runs: 4, wickets: 0, econ: 4.00 },
            { name: "Hardik Pandya (C)", overs: 2.0, maidens: 0, runs: 13, wickets: 0, econ: 6.50 }
        ]
    },
    innings2: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c Ayush Mishra b Ravindra Jadeja", runs: 24, balls: 19, fours: 3, sixes: 1, sr: 126.32 },
            { name: "Rohit Sharma", out: "not out", runs: 76, balls: 45, fours: 4, sixes: 6, sr: 168.89 },
            { name: "Suryakumar Yadav", out: "not out", runs: 68, balls: 30, fours: 6, sixes: 5, sr: 226.67 }
        ],
        extras: { total: 9, details: "(W 8, LB 1)" },
        total: { score: "177", details: "(1 wkts, 15.4 ov)" },
        yetToBat: "Will Jacks, Tilak Varma, Hardik Pandya (C), Naman Dhir, Mitchell Santner, Deepak Chahar, Trent Boult, Jasprit Bumrah, Ashwani Kumar",
        fow: "63/1 (R. Rickelton, 6.4 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 2.0, maidens: 0, runs: 24, wickets: 0, econ: 12.00 },
            { name: "Jamie Overton", overs: 2.0, maidens: 0, runs: 29, wickets: 0, econ: 14.50 },
            { name: "Ravichandran Ashwin", overs: 4.0, maidens: 0, runs: 25, wickets: 0, econ: 6.25 },
            { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 28, wickets: 1, econ: 9.33 },
            { name: "Noor Ahmad", overs: 3.0, maidens: 0, runs: 38, wickets: 0, econ: 12.00 },
            { name: "Matheesha Pathirana", overs: 1.4, maidens: 0, runs: 34, wickets: 0, econ: 20.40 }
        ]
    }
},
// Match 39 (index 38)
{
    team1: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '198/3', overs: '20' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '159/8', overs: '20' },
    status: 'GT won by 39 runs',
    toss: "KKR won the toss and decided to bowl",
    venue: "Eden Gardens",
    pom: "Shubman Gill", // Assuming based on performance
    innings1: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Rahane b Andre Russell", runs: 52, balls: 36, fours: 6, sixes: 1, sr: 144.44 },
            { name: "Shubman Gill", out: "c Rinku Singh b Vaibhav Arora", runs: 96, balls: 55, fours: 10, sixes: 3, sr: 163.64 },
            { name: "Jos Buttler (Wk)", out: "not out", runs: 41, balls: 23, fours: 6, sixes: 0, sr: 178.26 },
            { name: "Rahul Tewatia", out: "c Andre Russell b Harshit Rana", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Shahrukh Khan", out: "not out", runs: 11, balls: 5, fours: 0, sixes: 1, sr: 220.00 }
        ],
        extras: { total: 4, details: "(NB 1, W 3)" },
        total: { score: "198", details: "(3 wkts, 20 ov)" },
        yetToBat: "Washington Sundar, Sherfane Rutherford, Rashid Khan, Sai Kishore, Mohammed Siraj, Prasidh Krishna, Ishant Sharma",
        fow: "114/1 (S. Sudharsan, 12.2 ov) · 172/2 (S. Gill, 17.5 ov) · 177/3 (R. Tewatia, 18.3 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
            { name: "Moeen Ali", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 },
            { name: "Harshit Rana", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 11.25 },
            { name: "Varun Chakaravarthy", overs: 4.0, maidens: 0, runs: 33, wickets: 0, econ: 8.25 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 36, wickets: 0, econ: 9.00 },
            { name: "Andre Russell", overs: 1.0, maidens: 0, runs: 13, wickets: 1, econ: 13.00 }
        ]
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Rahmanullah Gurbaz (Wk)", out: "c & b Mohammed Siraj", runs: 8, balls: 4, fours: 0, sixes: 0, sr: 200.00 },
            { name: "Sunil Narine", out: "c Rahul Tewatia b Rashid Khan", runs: 17, balls: 13, fours: 2, sixes: 1, sr: 130.77 },
            { name: "Ajinkya Rahane (C)", out: "c Shubman Gill b Washington Sundar", runs: 50, balls: 36, fours: 5, sixes: 1, sr: 138.89 },
            { name: "Venkatesh Iyer", out: "c Washington Sundar b Sai Kishore", runs: 14, balls: 19, fours: 0, sixes: 0, sr: 73.68 },
            { name: "Rinku Singh", out: "c Shubman Gill b Ishant Sharma", runs: 17, balls: 14, fours: 1, sixes: 1, sr: 121.43 },
            { name: "Andre Russell", out: "c Jos Buttler b Rashid Khan", runs: 21, balls: 15, fours: 3, sixes: 1, sr: 140.00 },
            { name: "Ramandeep Singh", out: "c Sai Sudharsan b Mohammed Siraj", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Moeen Ali", out: "c Shahrukh Khan b Prasidh Krishna", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Angkrish Raghuvanshi", out: "not out", runs: 27, balls: 13, fours: 3, sixes: 1, sr: 207.69 },
            { name: "Harshit Rana", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
        ],
        extras: { total: 10, details: "(W 6, LB 4)" },
        total: { score: "159", details: "(8 wkts, 20 ov)" },
        yetToBat: "Varun Chakaravarthy, Vaibhav Arora",
        fow: "8/1 (R. Gurbaz, 0.5 ov) · 49/2 (S. Narine, 5.3 ov) · 84/3 (V. Iyer, 11.2 ov) · 91/4 (A. Rahane, 12.4 ov) · 115/5 (A. Russell, 15.5 ov) · 119/6 (R. Singh, 16.1 ov) · 119/7 (M. Ali, 16.5 ov) · 151/8 (Ramandeep Singh, 18.1 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 32, wickets: 1, econ: 8.00 },
            { name: "Ishant Sharma", overs: 2.0, maidens: 0, runs: 18, wickets: 1, econ: 9.00 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.25 },
            { name: "Washington Sundar", overs: 3.0, maidens: 0, runs: 36, wickets: 1, econ: 12.00 },
            { name: "Sai Kishore", overs: 3.0, maidens: 0, runs: 19, wickets: 1, econ: 6.33 }
        ]
    }
},
// Match 40 (index 39)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '159/6', overs: '20' },
    team2: { name: 'DC', logo: 'dc_logo.jpg', score: '161/2', overs: '17.5' },
    status: 'DC won by 8 wickets (13 balls left)',
    toss: "DC won the toss and decided to bowl",
    venue: "Ekana Cricket Stadium B Ground",
    pom: "KL Rahul", // Assuming based on performance
    innings1: {
        teamName: 'Super Giants',
        batting: [
            { name: "Aiden Markram", out: "c Tristan Stubbs b Dushmantha Chameera", runs: 58, balls: 33, fours: 3, sixes: 3, sr: 157.58 },
            { name: "Mitchell Marsh", out: "not out", runs: 45, balls: 36, fours: 3, sixes: 1, sr: 125.00 },
            { name: "Nicholas Pooran", out: "not out", runs: 9, balls: 5, fours: 2, sixes: 0, sr: 180.00 },
            { name: "Abdul Samad", out: "c & b Mukesh Kumar", runs: 2, balls: 8, fours: 0, sixes: 0, sr: 25.00 },
            { name: "David Miller", out: "not out", runs: 14, balls: 15, fours: 1, sixes: 0, sr: 49.33 },
            { name: "Ayush Badoni", out: "c & b Mukesh Kumar", runs: 38, balls: 21, fours: 6, sixes: 0, sr: 171.43 },
            { name: "Rishabh Pant (C)(Wk)", out: "c & b Mukesh Kumar", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 1, details: "(W 1)" },
        total: { score: "159", details: "(6 wkts, 20 ov)" },
        yetToBat: "Shardul Thakur, Prince Yadav, Digvesh Rathi, Ravi Bishnoi, Avesh Khan",
        fow: "8/1 (A. Markram, 0.6 ov) · 99/2 (N. Pooran, 11.2 ov) · 107/3 (A. Samad, 13.2 ov) · 116/4 (M. Marsh, 13.6 ov) · 148/5 (A. Badoni, 18.4 ov) · 148/6 (R. Pant, 18.6 ov)",
        bowling: [
            { name: "Axar Patel (C)", overs: 4.0, maidens: 0, runs: 29, wickets: 0, econ: 7.25 },
            { name: "Mitchell Starc", overs: 4.0, maidens: 0, runs: 25, wickets: 1, econ: 6.25 },
            { name: "Mukesh Kumar", overs: 4.0, maidens: 0, runs: 33, wickets: 4, econ: 8.25 },
            { name: "Dushmantha Chameera", overs: 3.0, maidens: 0, runs: 25, wickets: 1, econ: 8.33 },
            { name: "Vipraj Nigam", overs: 1.0, maidens: 0, runs: 14, wickets: 0, econ: 14.00 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 33, wickets: 0, econ: 8.25 }
        ]
    },
    innings2: {
        teamName: 'Capitals',
        batting: [
            { name: "Abhishek Porel", out: "c David Miller b Aiden Markram", runs: 51, balls: 36, fours: 9, sixes: 1, sr: 141.67 },
            { name: "Karun Nair", out: "c & b Aiden Markram", runs: 15, balls: 9, fours: 2, sixes: 1, sr: 166.67 },
            { name: "KL Rahul (Wk)", out: "not out", runs: 57, balls: 42, fours: 3, sixes: 3, sr: 135.71 },
            { name: "Axar Patel (C)", out: "not out", runs: 34, balls: 20, fours: 1, sixes: 4, sr: 170.00 }
        ],
        extras: { total: 4, details: "(W 3, LB 1)" },
        total: { score: "161", details: "(2 wkts, 17.5 ov)" },
        yetToBat: "Tristan Stubbs, Ashutosh Sharma, Vipraj Nigam, Mitchell Starc, Dushmantha Chameera, Kuldeep Yadav, Mukesh Kumar",
        fow: "58/1 (K. Nair, 5.4 ov) · 106/2 (A. Porel, 11.5 ov)",
        bowling: [
            { name: "Shardul Thakur", overs: 2.0, maidens: 0, runs: 28, wickets: 0, econ: 14.00 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 24, wickets: 0, econ: 6.00 },
            { name: "Prince Yadav", overs: 2.5, maidens: 0, runs: 23, wickets: 0, econ: 8.12 },
            { name: "Aiden Markram", overs: 3.0, maidens: 0, runs: 30, wickets: 2, econ: 10.00 },
            { name: "Avesh Khan", overs: 3.0, maidens: 0, runs: 19, wickets: 0, econ: 6.33 },
            { name: "Ravi Bishnoi", overs: 3.0, maidens: 0, runs: 36, wickets: 0, econ: 12.00 }
        ]
    }
},
// Match 41 (index 40)
{
    team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '143/8', overs: '20' },
    team2: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '146/3', overs: '15.4' },
    status: 'MI won by 7 wickets (26 balls left)',
    toss: "MI won the toss and decided to bowl",
    venue: "Rajiv Gandhi International Stadium",
    pom: "Rohit Sharma", // Assuming based on performance
    innings1: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Travis Head", out: "c Naman Dhir b Trent Boult", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Ishan Kishan", out: "c Vignesh Puthur b Trent Boult", runs: 8, balls: 8, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Nitish Kumar Reddy", out: "c & b Deepak Chahar", runs: 2, balls: 6, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Heinrich Klaasen (Wk)", out: "c Tilak Varma b Jasprit Bumrah", runs: 71, balls: 44, fours: 9, sixes: 2, sr: 161.36 },
            { name: "Tilak Varma", out: "c Ryan Rickelton b Hardik Pandya", runs: 12, balls: 14, fours: 1, sixes: 0, sr: 85.71 },
            { name: "Ashwini Monohar", out: "c & b Vignesh Puthur", runs: 43, balls: 37, fours: 2, sixes: 3, sr: 116.22 },
            { name: "Pat Cummins (C)", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Harshal Patel", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 4, details: "(W 3, LB 1)" },
        total: { score: "143", details: "(8 wkts, 20 ov)" },
        yetToBat: "Jaydev Unadkat, Zeeshan Ansari, Eshan Malinga",
        fow: "2/1 (T. Head, 1.2 ov) · 8/2 (I. Kishan, 2.1 ov) · 13/3 (A. Sharma, 3.3 ov) · 13/4 (N. K. Reddy, 4.1 ov) · 33/5 (A. Verma, 5.3 ov) · 139/6 (H. Klaasen, 18.6 ov) · 142/7 (A. Monohar, 19.3 ov) · 143/8 (P. Cummins, 19.6 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 4.0, maidens: 0, runs: 12, wickets: 2, econ: 3.00 },
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 26, wickets: 4, econ: 6.50 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
            { name: "Mitchell Santner", overs: 4.0, maidens: 0, runs: 19, wickets: 0, econ: 4.75 },
            { name: "Hardik Pandya (C)", overs: 3.0, maidens: 0, runs: 31, wickets: 1, econ: 10.33 },
            { name: "Vignesh Puthur", overs: 1.0, maidens: 0, runs: 15, wickets: 0, econ: 15.00 }
        ]
    },
    innings2: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c & b Jaydev Unadkat", runs: 11, balls: 8, fours: 2, sixes: 0, sr: 137.50 },
            { name: "Rohit Sharma", out: "c Ashwini Monohar b Eshan Malinga", runs: 70, balls: 46, fours: 8, sixes: 3, sr: 152.17 },
            { name: "Will Jacks", out: "c Ashwini Monohar b Zeeshan Ansari", runs: 22, balls: 19, fours: 2, sixes: 1, sr: 115.79 },
            { name: "Suryakumar Yadav", out: "not out", runs: 40, balls: 19, fours: 5, sixes: 2, sr: 210.53 },
            { name: "Tilak Varma", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 1, details: "(W 1)" },
        total: { score: "146", details: "(3 wkts, 15.4 ov)" },
        yetToBat: "Hardik Pandya (C), Naman Dhir, Mitchell Santner, Deepak Chahar, Trent Boult, Jasprit Bumrah, Vignesh Puthur",
        fow: "13/1 (R. Rickelton, 1.4 ov) · 77/2 (W. Jacks, 9.2 ov) · 130/3 (R. Sharma, 14.4 ov)",
        bowling: [
            { name: "Pat Cummins (C)", overs: 3.0, maidens: 0, runs: 31, wickets: 0, econ: 10.33 },
            { name: "Jaydev Unadkat", overs: 3.0, maidens: 0, runs: 25, wickets: 1, econ: 8.33 },
            { name: "Harshal Patel", overs: 3.0, maidens: 0, runs: 21, wickets: 0, econ: 7.00 },
            { name: "Eshan Malinga", overs: 3.0, maidens: 0, runs: 33, wickets: 1, econ: 11.00 },
            { name: "Zeeshan Ansari", overs: 3.4, maidens: 0, runs: 36, wickets: 1, econ: 9.82 }
        ]
    }
},
// Match 42 (index 41)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '205/5', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '194/9', overs: '20' },
    status: 'RCB won by 11 runs',
    toss: "RR won the toss and decided to bowl",
    venue: "M. Chinnaswamy Stadium",
    pom: "Virat Kohli", // Assuming based on performance
    innings1: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c Shimron Hetmyer b Wanindu Hasaranga", runs: 26, balls: 23, fours: 4, sixes: 0, sr: 113.04 },
            { name: "Virat Kohli", out: "c Nitish Rana b Jofra Archer", runs: 79, balls: 42, fours: 8, sixes: 2, sr: 188.87 },
            { name: "Devdutt Padikkal", out: "c Riyan Parag b Sandeep Sharma", runs: 50, balls: 27, fours: 4, sixes: 3, sr: 185.19 },
            { name: "Tim David", out: "run out (Shimron Hetmyer)", runs: 23, balls: 15, fours: 2, sixes: 1, sr: 153.33 },
            { name: "Rajat Patidar (C)", out: "c Dhruv Jurel b Sandeep Sharma", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Jitesh Sharma (Wk)", out: "not out", runs: 29, balls: 10, fours: 4, sixes: 0, sr: 290.00 }
        ],
        extras: { total: 15, details: "(W 14, LB 1)" },
        total: { score: "205", details: "(5 wkts, 20 ov)" },
        yetToBat: "Romario Shepherd, Krunal Pandya, Bhuvneshwar Kumar, Josh Hazlewood, Yash Dayal, Suyash Sharma (IP)",
        fow: "81/1 (P. Salt, 8.4 ov) · 136/2 (V. Kohli, 15.1 ov) · 181/3 (D. Padikkal, 18.1 ov) · 183/4 (R. Patidar, 18.2 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 33, wickets: 1, econ: 8.25 },
            { name: "Fazalhaq Farooqi", overs: 3.0, maidens: 0, runs: 30, wickets: 0, econ: 10.00 },
            { name: "Tushar Deshpande", overs: 2.0, maidens: 0, runs: 36, wickets: 0, econ: 18.00 },
            { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 45, wickets: 2, econ: 11.25 },
            { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Riyan Parag (C)", overs: 3.0, maidens: 0, runs: 30, wickets: 0, econ: 10.00 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Romario Shepherd b Josh Hazlewood", runs: 49, balls: 19, fours: 7, sixes: 2, sr: 257.89 },
            { name: "Vaibhav Suryavanshi (IP)", out: "c & b Krunal Pandya", runs: 18, balls: 12, fours: 0, sixes: 2, sr: 150.00 },
            { name: "Nitish Rana", out: "c Bhuvneshwar Kumar b Krunal Pandya", runs: 28, balls: 22, fours: 3, sixes: 1, sr: 127.27 },
            { name: "Riyan Parag (C)", out: "c Jitesh Sharma b Krunal Pandya", runs: 22, balls: 10, fours: 2, sixes: 2, sr: 220.00 },
            { name: "Dhruv Jurel (Wk)", out: "c Jitesh Sharma b Josh Hazlewood", runs: 47, balls: 34, fours: 3, sixes: 3, sr: 138.24 },
            { name: "Shimron Hetmyer", out: "c Jitesh Sharma b Josh Hazlewood", runs: 11, balls: 8, fours: 1, sixes: 0, sr: 137.50 },
            { name: "Shubham Dubey", out: "c & b Yash Dayal", runs: 12, balls: 7, fours: 1, sixes: 1, sr: 171.43 },
            { name: "Jofra Archer", out: "c Jitesh Sharma b Josh Hazlewood", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Wanindu Hasaranga", out: "run out (Tim David)", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Tushar Deshpande", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Fazalhaq Farooqi", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 5, details: "(W 4, B 1)" },
        total: { score: "194", details: "(9 wkts, 20 ov)" },
        yetToBat: "Sandeep Sharma",
        fow: "50/1 (V. Suryavanshi, 4.2 ov) · 72/2 (Y. Jaiswal, 5.5 ov) · 110/3 (R. Parag, 9.1 ov) · 134/4 (N. Rana, 11.4 ov) · 159/5 (D. Jurel, 14.5 ov) · 181/6 (S. Hetmyer, 17.4 ov) · 188/7 (J. Archer, 18.4 ov) · 189/8 (S. Dubey, 19.1 ov) · 191/9 (W. Hasaranga, 19.3 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 50, wickets: 1, econ: 12.50 },
            { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 33, wickets: 1, econ: 11.00 },
            { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 33, wickets: 4, econ: 8.25 },
            { name: "Romario Shepherd", overs: 1.0, maidens: 0, runs: 15, wickets: 0, econ: 15.00 },
            { name: "Suyash Sharma (IP)", overs: 4.0, maidens: 0, runs: 31, wickets: 0, econ: 7.75 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 31, wickets: 2, econ: 7.75 }
        ]
    }
},
// Match 43 (index 42)
{
    team1: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '154/10', overs: '19.5' },
    team2: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '155/5', overs: '18.4' },
    status: 'SRH won by 5 wickets (8 balls left)',
    toss: "SRH won the toss and decided to bowl",
    venue: "MA Chidambaram Stadium",
    pom: "Ishan Kishan", // Assuming based on performance
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Shaik Rasheed", out: "c Abhishek Sharma b Mohammed Shami", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Ayush Mishra", out: "c Ishan Kishan b Pat Cummins", runs: 30, balls: 19, fours: 6, sixes: 0, sr: 157.89 },
            { name: "Sam Curran", out: "c & b Harshal Patel", runs: 9, balls: 10, fours: 1, sixes: 0, sr: 90.00 },
            { name: "Ravindra Jadeja", out: "not out", runs: 21, balls: 17, fours: 1, sixes: 1, sr: 123.53 },
            { name: "Daryl Drevis", out: "c Abhishek Sharma b Harshal Patel", runs: 42, balls: 25, fours: 1, sixes: 4, sr: 168.00 },
            { name: "Shivam Dube", out: "c Abhishek Sharma b Jaydev Unadkat", runs: 12, balls: 9, fours: 2, sixes: 0, sr: 133.33 },
            { name: "Deepak Hooda", out: "c Abhishek Sharma b Jaydev Unadkat", runs: 22, balls: 21, fours: 1, sixes: 1, sr: 104.76 },
            { name: "MS Dhoni (C)(Wk)", out: "c Heinrich Klaasen b Harshal Patel", runs: 6, balls: 10, fours: 1, sixes: 0, sr: 60.00 },
            { name: "Anshul Kamboj (IP)", out: "c Heinrich Klaasen b Pat Cummins", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Noor Ahmad", out: "not out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Khaleel Ahmed", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
        ],
        extras: { total: 7, details: "(NB 2, W 2, LB 3)" },
        total: { score: "154", details: "(10 wkts, 19.5 ov)" },
        yetToBat: "Matheesha Pathirana",
        fow: "0/1 (S. Rasheed, 0.1 ov) · 35/2 (S. Curran, 4.3 ov) · 47/3 (A. Mishra, 5.3 ov) · 74/4 (R. Jadeja, 9.2 ov) · 98/5 (D. Drevis, 12.1 ov) · 122/6 (S. Dube, 14.3 ov) · 134/7 (D. Hooda, 16.3 ov) · 134/8 (A. Kamboj, 17.3 ov) · 137/9 (N. Ahmad, 18.1 ov) · 154/10 (D. Hooda, 19.5 ov)",
        bowling: [
            { name: "Mohammed Shami", overs: 3.0, maidens: 0, runs: 28, wickets: 1, econ: 9.33 },
            { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 21, wickets: 2, econ: 5.25 },
            { name: "Jaydev Unadkat", overs: 2.5, maidens: 0, runs: 21, wickets: 2, econ: 7.41 },
            { name: "Harshal Patel", overs: 4.0, maidens: 0, runs: 28, wickets: 4, econ: 7.00 },
            { name: "Zeeshan Ansari", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 },
            { name: "Kamindu Mendis", overs: 3.0, maidens: 0, runs: 26, wickets: 1, econ: 8.67 }
        ]
    },
    innings2: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Abhishek Sharma", out: "c Ayush Mishra b Khaleel Ahmed", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Travis Head (IP)", out: "c & b Khaleel Ahmed", runs: 19, balls: 16, fours: 4, sixes: 0, sr: 118.75 },
            { name: "Ishan Kishan", out: "c Deepak Hooda b Noor Ahmad", runs: 44, balls: 34, fours: 5, sixes: 1, sr: 129.41 },
            { name: "Heinrich Klaasen (Wk)", out: "c Deepak Hooda b Ravindra Jadeja", runs: 7, balls: 8, fours: 1, sixes: 0, sr: 87.50 },
            { name: "Ayush Mishra", out: "c Deepak Hooda b Noor Ahmad", runs: 19, balls: 19, fours: 0, sixes: 2, sr: 100.00 },
            { name: "Kamindu Mendis", out: "not out", runs: 32, balls: 22, fours: 3, sixes: 0, sr: 145.45 },
            { name: "Nitish Kumar Reddy", out: "not out", runs: 19, balls: 13, fours: 2, sixes: 0, sr: 146.15 }
        ],
        extras: { total: 15, details: "(NB 2, W 11, LB 2)" },
        total: { score: "155", details: "(5 wkts, 18.4 ov)" },
        yetToBat: "Pat Cummins (C), Harshal Patel, Jaydev Unadkat, Mohammed Shami, Zeeshan Ansari",
        fow: "0/1 (A. Sharma, 0.2 ov) · 37/2 (T. Head, 3.3 ov) · 54/3 (H. Klaasen, 5.1 ov) · 90/4 (I. Kishan, 11.4 ov) · 130/5 (A. Verma, 13.5 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 3.0, maidens: 0, runs: 21, wickets: 1, econ: 7.00 },
            { name: "Anshul Kamboj (IP)", overs: 3.0, maidens: 0, runs: 16, wickets: 1, econ: 5.33 },
            { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 42, wickets: 2, econ: 10.50 },
            { name: "Ravindra Jadeja", overs: 3.4, maidens: 0, runs: 22, wickets: 1, econ: 6.00 },
            { name: "Sam Curran", overs: 2.0, maidens: 0, runs: 25, wickets: 0, econ: 12.50 },
            { name: "Matheesha Pathirana", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 }
        ]
    }
},
// Match 44 (index 43)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '201/4', overs: '20' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '7/0', overs: '1' },
    status: 'No result',
    toss: "PBKS won the toss and decided to bat",
    venue: "Eden Gardens",
    pom: "Prabhsimran Singh", // Assuming based on performance before rain
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Prabhsimran Singh", out: "c Vaibhav Arora b Andre Russell", runs: 82, balls: 35, fours: 8, sixes: 4, sr: 197.14 },
            { name: "Shikhar Dhawan", out: "c Rovman Powell b Vaibhav Arora", runs: 83, balls: 49, fours: 6, sixes: 6, sr: 169.39 },
            { name: "Shreyas Iyer (C)", out: "not out", runs: 25, balls: 16, fours: 1, sixes: 1, sr: 156.25 },
            { name: "Glenn Maxwell", out: "c Andre Russell b Harshit Rana", runs: 7, balls: 8, fours: 1, sixes: 0, sr: 87.50 },
            { name: "Marco Jansen", out: "c Venkatesh Iyer b Vaibhav Arora", runs: 3, balls: 7, fours: 0, sixes: 0, sr: 42.86 },
            { name: "Jitesh Sharma (Wk)", out: "not out", runs: 11, balls: 6, fours: 2, sixes: 0, sr: 183.33 }
        ],
        extras: { total: 3, details: "(NB 1, W 2)" },
        total: { score: "201", details: "(4 wkts, 20 ov)" },
        yetToBat: "Nahal Wadhera, Shashank Singh, Armaan Jaffer, Yuzvendra Chahal, Arshdeep Singh",
        fow: "120/1 (P. Arya, 11.5 ov) · 160/2 (P. Singh, 14.3 ov) · 172/3 (G. Maxwell, 16.4 ov) · 184/4 (M. Jansen, 18.2 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 34, wickets: 2, econ: 8.50 },
            { name: "Chetan Sakariya", overs: 3.0, maidens: 0, runs: 39, wickets: 0, econ: 13.00 },
            { name: "Harshit Rana", overs: 2.0, maidens: 0, runs: 27, wickets: 0, econ: 13.50 },
            { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 35, wickets: 0, econ: 8.75 },
            { name: "Andre Russell", overs: 3.0, maidens: 0, runs: 27, wickets: 1, econ: 9.00 }
        ]
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Rahmanullah Gurbaz (Wk)", out: "not out", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Sunil Narine", out: "not out", runs: 4, balls: 3, fours: 1, sixes: 0, sr: 133.33 }
        ],
        extras: { total: 2, details: "(W 1, LB 1)" },
        total: { score: "7", details: "(0 wkts, 1 ov)" },
        yetToBat: "Ajinkya Rahane (C), Angkrish Raghuvanshi, Venkatesh Iyer, Rovman Powell, Rinku Singh, Andre Russell, Varun Chakravarthy, Harshit Rana, Chetan Sakariya",
        fow: "",
        bowling: [
            { name: "Marco Jansen", overs: 1.0, maidens: 0, runs: 6, wickets: 0, econ: 6.00 }
        ]
    }
},
// Match 45 (index 44)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '215/7', overs: '20' },
    team2: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '161', overs: '20' },
    status: 'MI won by 54 runs',
    toss: "LSG won the toss and decided to bowl",
    venue: "Wankhede Stadium",
    pom: "Ryan Rickelton", // Assuming based on performance
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c Ayush Badoni b Digvesh Rathi", runs: 81, balls: 42, fours: 6, sixes: 4, sr: 181.25 },
            { name: "Rohit Sharma", out: "c Prince Yadav b Mayank Yadav", runs: 12, balls: 5, fours: 0, sixes: 2, sr: 240.00 },
            { name: "Will Jacks", out: "c Ravi Bishnoi b Avesh Khan", runs: 29, balls: 21, fours: 3, sixes: 1, sr: 138.10 },
            { name: "Suryakumar Yadav", out: "c Prince Yadav b Ravi Bishnoi", runs: 54, balls: 28, fours: 4, sixes: 4, sr: 192.86 },
            { name: "Tilak Varma", out: "c Prince Yadav b Ravi Bishnoi", runs: 6, balls: 5, fours: 1, sixes: 0, sr: 120.00 },
            { name: "Nehal Wadhera", out: "c & b Mayank Yadav", runs: 5, balls: 7, fours: 0, sixes: 0, sr: 71.43 },
            { name: "Naman Dhir", out: "not out", runs: 25, balls: 11, fours: 2, sixes: 2, sr: 227.27 },
            { name: "Corbin Bosch", out: "c Ravi Bishnoi b Avesh Khan", runs: 20, balls: 10, fours: 2, sixes: 1, sr: 200.00 },
            { name: "Deepak Chahar", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 5, details: "(W 5)" },
        total: { score: "215", details: "(7 wkts, 20 ov)" },
        yetToBat: "Trent Boult, Karn Sharma, Jasprit Bumrah",
        fow: "33/1 (R. Sharma, 2.5 ov) · 88/2 (R. Rickelton, 8.4 ov) · 116/3 (W. Jacks, 11.3 ov) · 137/4 (T. Varma, 12.6 ov) · 157/5 (H. Pandya, 15.1 ov) · 180/6 (S. Yadav, 17.3 ov) · 209/7 (C. Bosch, 19.4 ov)",
        bowling: [
            { name: "Mayank Yadav", overs: 4.0, maidens: 0, runs: 40, wickets: 2, econ: 10.00 },
            { name: "Prince Yadav", overs: 4.0, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 12.00 },
            { name: "Ravi Bishnoi", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Avesh Khan", overs: 4.0, maidens: 0, runs: 42, wickets: 2, econ: 10.50 }
        ]
    },
    innings2: {
        teamName: 'Super Giants',
        batting: [
            { name: "Mitchell Marsh", out: "c Tilak Varma b Trent Boult", runs: 34, balls: 24, fours: 3, sixes: 2, sr: 141.67 },
            { name: "Aiden Markram", out: "c Naman Dhir b Jasprit Bumrah", runs: 9, balls: 11, fours: 2, sixes: 0, sr: 81.82 },
            { name: "Nicholas Pooran", out: "c & b Will Jacks", runs: 27, balls: 15, fours: 1, sixes: 3, sr: 180.00 },
            { name: "Rishabh Pant (C)(Wk)", out: "c & b Jasprit Bumrah", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
            { name: "Ayush Badoni", out: "c Corbin Bosch b Trent Boult", runs: 35, balls: 22, fours: 2, sixes: 2, sr: 159.09 },
            { name: "David Miller", out: "c Corbin Bosch b Jasprit Bumrah", runs: 24, balls: 16, fours: 3, sixes: 0, sr: 150.00 },
            { name: "Abdul Samad", out: "not out", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Ravi Bishnoi", out: "c & b Jasprit Bumrah", runs: 13, balls: 14, fours: 0, sixes: 2, sr: 92.86 },
            { name: "Avesh Khan", out: "c & b Jasprit Bumrah", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Prince Yadav", out: "not out", runs: 4, balls: 9, fours: 0, sixes: 0, sr: 44.44 },
            { name: "Digvesh Rathi", out: "c & b Trent Boult", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 }
        ],
        extras: { total: 8, details: "(NB 1, W 5, LB 2)" },
        total: { score: "161", details: "(10 wkts, 20 ov)" },
        yetToBat: "Mayank Yadav",
        fow: "16/1 (A. Markram, 2.4 ov) · 60/2 (N. Pooran, 6.2 ov) · 64/3 (R. Pant, 6.5 ov) · 110/4 (M. Marsh, 11.2 ov) · 135/5 (A. Badoni, 14.2 ov) · 141/6 (D. Miller, 15.2 ov) · 142/7 (A. Samad, 16.2 ov) · 142/8 (A. Khan, 15.6 ov) · 152/9 (R. Bishnoi, 18.5 ov) · 161/10 (D. Rathi, 19.6 ov)",
        bowling: [
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 20, wickets: 3, econ: 5.00 },
            { name: "Deepak Chahar", overs: 3.0, maidens: 0, runs: 38, wickets: 0, econ: 12.67 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 22, wickets: 4, econ: 5.50 },
            { name: "Will Jacks", overs: 2.0, maidens: 0, runs: 18, wickets: 2, econ: 9.00 },
            { name: "Karn Sharma", overs: 2.0, maidens: 0, runs: 25, wickets: 0, econ: 12.50 },
            { name: "Hardik Pandya (C)", overs: 1.0, maidens: 0, runs: 10, wickets: 1, econ: 10.00 },
            { name: "Corbin Bosch", overs: 4.0, maidens: 0, runs: 26, wickets: 1, econ: 6.50 }
        ]
    }
},
// Match 46 (index 45)
{
    team1: { name: 'DC', logo: 'Logos/dc_logo.png', score: '162/8', overs: '20' },
    team2: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '165/4', overs: '18.3' },
    status: 'RCB won by 6 wickets (9 balls left)',
    toss: "RCB won the toss and decided to bowl",
    venue: "Arun Jaitley",
    pom: "Krunal Pandya", // Assuming based on performance
    innings1: {
        teamName: 'Capitals',
        batting: [
            { name: "Abhishek Porel", out: "c & b Josh Hazlewood", runs: 28, balls: 11, fours: 2, sixes: 2, sr: 254.55 },
            { name: "Faf du Plessis", out: "c Virat Kohli b Krunal Pandya", runs: 22, balls: 26, fours: 2, sixes: 0, sr: 84.62 },
            { name: "Karun Nair", out: "c Bhuvneshwar Kumar b Yash Dayal", runs: 4, balls: 4, fours: 1, sixes: 0, sr: 100.00 },
            { name: "KL Rahul (Wk)", out: "c & b Bhuvneshwar Kumar", runs: 41, balls: 39, fours: 3, sixes: 0, sr: 105.13 },
            { name: "Axar Patel (C)", out: "c & b Josh Hazlewood", runs: 15, balls: 13, fours: 1, sixes: 1, sr: 115.38 },
            { name: "Tristan Stubbs", out: "c Faf du Plessis b Bhuvneshwar Kumar", runs: 34, balls: 18, fours: 5, sixes: 1, sr: 188.89 },
            { name: "Ashutosh Sharma", out: "c Virat Kohli b Bhuvneshwar Kumar", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Vipraj Nigam", out: "not out", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.00 },
            { name: "Mitchell Starc", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Dushmantha Chameera", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 4, details: "(NB 1, W 2, LB 1)" },
        total: { score: "162", details: "(8 wkts, 20 ov)" },
        yetToBat: "Kuldeep Yadav, Mukesh Kumar",
        fow: "44/1 (A. Porel, 3.4 ov) · 44/2 (K. Nair, 4.4 ov) · 73/3 (F. du Plessis, 9.5 ov) · 102/4 (A. Patel, 13.4 ov) · 118/5 (KL Rahul, 15.2 ov) · 120/6 (A. Sharma, 16.5 ov) · 158/7 (V. Nigam, 18.2 ov) · 162/8 (T. Stubbs, 19.5 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 33, wickets: 3, econ: 8.25 },
            { name: "Yash Dayal", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
            { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 38, wickets: 2, econ: 9.50 },
            { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 22, wickets: 0, econ: 5.50 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 7.00 }
        ]
    },
    innings2: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Jacob Ball", out: "c Faf du Plessis b Axar Patel", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.00 },
            { name: "Virat Kohli", out: "c Mitchell Starc b Dushmantha Chameera", runs: 51, balls: 47, fours: 4, sixes: 0, sr: 108.51 },
            { name: "Devdutt Padikkal", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Rajat Patidar (C)", out: "c & b Kuldeep Yadav", runs: 6, balls: 6, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Krunal Pandya", out: "not out", runs: 73, balls: 47, fours: 5, sixes: 4, sr: 155.32 },
            { name: "Tim David", out: "not out", runs: 12, balls: 5, fours: 3, sixes: 1, sr: 280.00 }
        ],
        extras: { total: 4, details: "(NB 2, W 2)" },
        total: { score: "165", details: "(4 wkts, 18.3 ov)" },
        yetToBat: "Yash Dayal, Suyash Sharma",
        fow: "20/1 (J. Bethel, 2.2 ov) · 20/2 (D. Padikkal, 2.4 ov) · 25/3 (R. Patidar, 3.6 ov) · 145/4 (V. Kohli, 17.2 ov)",
        bowling: [
            { name: "Axar Patel (C)", overs: 4.0, maidens: 0, runs: 19, wickets: 2, econ: 4.75 },
            { name: "Mitchell Starc", overs: 3.0, maidens: 0, runs: 31, wickets: 0, econ: 10.33 },
            { name: "Mukesh Kumar", overs: 3.3, maidens: 0, runs: 51, wickets: 0, econ: 14.57 },
            { name: "Vipraj Nigam", overs: 1.0, maidens: 0, runs: 12, wickets: 0, econ: 12.00 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 28, wickets: 0, econ: 7.00 },
            { name: "Dushmantha Chameera", overs: 3.0, maidens: 0, runs: 24, wickets: 1, econ: 8.00 }
        ]
    }
},
// Match 47 (index 46)
{
    team1: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '209/4', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '212/2', overs: '15.5' },
    status: 'RR won by 8 wickets (25 balls left)',
    toss: "RR won the toss and decided to bowl",
    venue: "Sawai Mansingh Stadium",
    pom: "Vaibhav Suryavanshi", // For his century
    innings1: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Riyan Parag b Mahesh Theekshana", runs: 32, balls: 30, fours: 4, sixes: 1, sr: 120.00 },
            { name: "Shubman Gill", out: "c & b Mahesh Theekshana", runs: 84, balls: 50, fours: 5, sixes: 4, sr: 168.00 },
            { name: "Jos Buttler (Wk)", out: "c Yashasvi Jaiswal b Sandeep Sharma", runs: 50, balls: 26, fours: 3, sixes: 4, sr: 192.31 },
            { name: "Washington Sundar", out: "c Sandeep Sharma b Jofra Archer", runs: 13, balls: 8, fours: 0, sixes: 1, sr: 162.50 },
            { name: "Rahul Tewatia", out: "c & b Jofra Archer", runs: 9, balls: 4, fours: 0, sixes: 1, sr: 225.00 },
            { name: "Shahrukh Khan", out: "not out", runs: 5, balls: 2, fours: 1, sixes: 0, sr: 250.00 }
        ],
        extras: { total: 9, details: "(W 8, LB 1)" },
        total: { score: "209", details: "(4 wkts, 20 ov)" },
        yetToBat: "Karim Janat, Rashid Khan, Sai Kishore, Mohammed Siraj, Prasidh Krishna, Ishant Sharma",
        fow: "50/1 (S. Sudharsan, 10.2 ov) · 167/2 (S. Gill, 16.4 ov) · 180/3 (W. Sundar, 18.4 ov) · 202/4 (R. Tewatia, 19.2 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 49, wickets: 1, econ: 12.25 },
            { name: "Mahesh Theekshana", overs: 4.0, maidens: 0, runs: 33, wickets: 2, econ: 8.75 },
            { name: "Yudhvir Singh", overs: 3.0, maidens: 0, runs: 38, wickets: 0, econ: 12.67 },
            { name: "Sandeep Sharma", overs: 4.0, maidens: 0, runs: 33, wickets: 1, econ: 8.25 },
            { name: "Riyan Parag(C)", overs: 1.0, maidens: 0, runs: 14, wickets: 0, econ: 14.00 },
            { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 39, wickets: 0, econ: 9.75 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "not out", runs: 72, balls: 40, fours: 9, sixes: 2, sr: 175.00 },
            { name: "Vaibhav Suryavanshi", out: "c & b Prasidh Krishna", runs: 101, balls: 35, fours: 7, sixes: 11, sr: 285.79 },
            { name: "Nitish Rana", out: "c Shahrukh Khan b Rashid Khan", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
            { name: "Riyan Parag(C)", out: "not out", runs: 32, balls: 15, fours: 2, sixes: 2, sr: 213.33 }
        ],
        extras: { total: 5, details: "(W 4, LB 1)" },
        total: { score: "212", details: "(2 wkts, 15.5 ov)" },
        yetToBat: "Dhruv Jurel (Wk), Shimron Hetmyer, Wanindu Hasaranga, Jofra Archer, Mahesh Theekshana, Sandeep Sharma, Yudhvir Singh",
        fow: "166/1 (V. Suryavanshi, 11.5 ov) · 171/2 (N. Rana, 12.3 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 2.0, maidens: 0, runs: 24, wickets: 0, econ: 12.00 },
            { name: "Ishant Sharma", overs: 2.0, maidens: 0, runs: 36, wickets: 0, econ: 18.00 },
            { name: "Washington Sundar", overs: 1.5, maidens: 0, runs: 34, wickets: 0, econ: 18.55 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 47, wickets: 1, econ: 11.75 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 24, wickets: 1, econ: 6.00 },
            { name: "Karim Janat", overs: 1.0, maidens: 0, runs: 30, wickets: 0, econ: 30.00 },
            { name: "Sai Kishore", overs: 1.0, maidens: 0, runs: 16, wickets: 0, econ: 16.00 }
        ]
    }
},
// Match 48 (index 47)
{
    team1: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '204/9', overs: '20' },
    team2: { name: 'DC', logo: 'dc_logo.jpg', score: '190/9', overs: '20' },
    status: 'KKR won by 14 runs',
    toss: "DC won the toss and decided to bowl",
    venue: "Arun Jaitley",
    pom: "Angkrish Raghuvanshi", // For his impactful batting
    innings1: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Rahmanullah Gurbaz (Wk)", out: "c Abhishek Porel b Mitchell Starc", runs: 88, balls: 38, fours: 12, sixes: 5, sr: 216.67 },
            { name: "Sunil Narine", out: "c & b Vipraj Nigam", runs: 27, balls: 16, fours: 2, sixes: 2, sr: 168.75 },
            { name: "Ajinkya Rahane (C)", out: "not out", runs: 28, balls: 14, fours: 4, sixes: 1, sr: 185.71 },
            { name: "Angkrish Raghuvanshi", out: "c & b Dushmantha Chameera", runs: 44, balls: 32, fours: 3, sixes: 2, sr: 137.50 },
            { name: "Venkatesh Iyer", out: "c Vipraj Nigam b Axar Patel", runs: 7, balls: 5, fours: 1, sixes: 0, sr: 140.00 },
            { name: "Andre Russell", out: "c Mitchell Starc b Vipraj Nigam", runs: 38, balls: 26, fours: 3, sixes: 1, sr: 144.00 },
            { name: "Rinku Singh", out: "c Abhishek Porel b Axar Patel", runs: 17, balls: 9, fours: 2, sixes: 1, sr: 188.89 },
            { name: "Rovman Powell", out: "not out", runs: 5, balls: 5, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Anukul Roy", out: "c Dushmantha Chameera b Mitchell Starc", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Harshit Rana", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Varun Chakravarthy", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 15, details: "(NB 1, W 11, LB 3)" },
        total: { score: "204", details: "(9 wkts, 20 ov)" },
        yetToBat: "Vaibhav Arora",
        fow: "48/1 (R. Gurbaz, 2.6 ov) · 82/2 (S. Narine, 5.4 ov) · 91/3 (A. Rahane, 7.2 ov) · 113/4 (V. Iyer, 10.1 ov) · 138/5 (A. Raghuvanshi, 13.5 ov) · 188/6 (R. Singh, 17.3 ov) · 200/7 (R. Powell, 19.3 ov) · 202/8 (A. Roy, 19.4 ov) · 203/9 (A. Russell, 19.5 ov)",
        bowling: [
            { name: "Mitchell Starc", overs: 4.0, maidens: 0, runs: 43, wickets: 3, econ: 10.75 },
            { name: "Dushmantha Chameera", overs: 3.0, maidens: 0, runs: 46, wickets: 1, econ: 15.33 },
            { name: "Mukesh Kumar", overs: 2.0, maidens: 0, runs: 17, wickets: 0, econ: 8.50 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 41, wickets: 2, econ: 10.25 },
            { name: "Axar Patel (C)", overs: 4.0, maidens: 0, runs: 27, wickets: 2, econ: 6.75 },
            { name: "Kuldeep Yadav", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 }
        ]
    },
    innings2: {
        teamName: 'Capitals',
        batting: [
            { name: "Abishek Porel (Wk)", out: "c & b Anukul Roy", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
            { name: "Faf du Plessis", out: "c Rinku Singh b Sunil Narine", runs: 62, balls: 45, fours: 7, sixes: 2, sr: 137.78 },
            { name: "Karun Nair", out: "c & b Sunil Narine", runs: 15, balls: 13, fours: 2, sixes: 0, sr: 115.38 },
            { name: "KL Rahul", out: "not out", runs: 7, balls: 5, fours: 1, sixes: 0, sr: 140.00 },
            { name: "Axar Patel (C)", out: "c Rinku Singh b Sunil Narine", runs: 43, balls: 23, fours: 4, sixes: 3, sr: 186.96 },
            { name: "Tristan Stubbs", out: "c & b Sunil Narine", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Vipraj Nigam", out: "c & b Anukul Roy", runs: 38, balls: 19, fours: 5, sixes: 2, sr: 200.00 },
            { name: "Ashutosh Sharma", out: "c & b Varun Chakravarthy", runs: 7, balls: 6, fours: 1, sixes: 0, sr: 116.67 },
            { name: "Mitchell Starc", out: "c Rahmanullah Gurbaz b Varun Chakravarthy", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Dushmantha Chameera", out: "not out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Kuldeep Yadav", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 10, details: "(NB 1, W 4, B 5)" },
        total: { score: "190", details: "(9 wkts, 20 ov)" },
        yetToBat: "Mukesh Kumar",
        fow: "4/1 (A. Porel, 0.2 ov) · 43/2 (K. Nair, 4.3 ov) · 60/3 (KL Rahul, 6.3 ov) · 136/4 (A. Patel, 13.2 ov) · 138/5 (T. Stubbs, 13.6 ov) · 148/6 (F. du Plessis, 15.2 ov) · 169/7 (A. Sharma, 17.2 ov) · 182/8 (M. Starc, 17.3 ov) · 188/9 (V. Nigam, 19.5 ov)",
        bowling: [
            { name: "Anukul Roy", overs: 4.0, maidens: 0, runs: 27, wickets: 1, econ: 6.75 },
            { name: "Vaibhav Arora", overs: 2.0, maidens: 0, runs: 19, wickets: 1, econ: 9.50 },
            { name: "Harshit Rana", overs: 4.0, maidens: 0, runs: 49, wickets: 0, econ: 12.25 },
            { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 39, wickets: 2, econ: 9.75 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 29, wickets: 3, econ: 7.25 },
            { name: "Andre Russell", overs: 2.0, maidens: 0, runs: 22, wickets: 1, econ: 11.00 }
        ]
    }
},
// Match 49 (index 48)
{
    team1: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '190/10', overs: '19.2' },
    team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '194/6', overs: '19.4' },
    status: 'PBKS won by 4 wickets (2 balls left)',
    toss: "PBKS won the toss and decided to bowl",
    venue: "MA Chidambaram Stadium",
    pom: "Sam Curran", // For his all-round performance
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Shaik Rasheed", out: "c Shashank Singh b Arshdeep Singh", runs: 12, balls: 13, fours: 1, sixes: 0, sr: 92.31 },
            { name: "Ayush Mishra", out: "c Shashank Singh b Marco Jansen", runs: 7, balls: 6, fours: 1, sixes: 0, sr: 116.67 },
            { name: "Sam Curran", out: "c Shashank Singh b Marco Jansen", runs: 88, balls: 47, fours: 9, sixes: 4, sr: 187.23 },
            { name: "Ravindra Jadeja", out: "c Harpreet Brar b Yuzvendra Chahal", runs: 17, balls: 12, fours: 4, sixes: 0, sr: 141.67 },
            { name: "Dewald Brevis", out: "c & b Armadullah Omarzai", runs: 32, balls: 26, fours: 2, sixes: 1, sr: 123.08 },
            { name: "Shivam Dube", out: "c Shashank Singh b Arshdeep Singh", runs: 8, balls: 8, fours: 1, sixes: 0, sr: 100.00 },
            { name: "MS Dhoni (C)(Wk)", out: "c Shashank Singh b Yuzvendra Chahal", runs: 11, balls: 4, fours: 1, sixes: 1, sr: 275.00 },
            { name: "Deepak Hooda", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Anshul Kamboj", out: "c & b Yuzvendra Chahal", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Noor Ahmad", out: "c Harpreet Brar b Yuzvendra Chahal", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Khaleel Ahmed", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 14, details: "(NB 1, W 12, LB 3)" },
        total: { score: "190", details: "(10 wkts, 19.2 ov)" },
        yetToBat: "Matheesha Pathirana",
        fow: "21/1 (S. Rasheed, 2.5 ov) · 22/2 (A. Mishra, 3.1 ov) · 48/3 (R. Jadeja, 5.3 ov) · 126/4 (D. Brevis, 13.4 ov) · 136/5 (S. Dube, 15.4 ov) · 186/6 (A. Kamboj, 18.5 ov) · 186/7 (N. Ahmad, 18.6 ov) · 190/10 (S. Curran, 19.2 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 3.2, maidens: 0, runs: 25, wickets: 2, econ: 7.50 },
            { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 30, wickets: 2, econ: 7.50 },
            { name: "Azmatullah Omarzai", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
            { name: "Harpreet Brar", overs: 2.0, maidens: 0, runs: 21, wickets: 1, econ: 10.50 },
            { name: "Yuzvendra Chahal", overs: 3.0, maidens: 0, runs: 32, wickets: 4, econ: 10.67 },
            { name: "Suryansh Shedge", overs: 3.0, maidens: 0, runs: 40, wickets: 0, econ: 13.33 }
        ]
    },
    innings2: {
        teamName: 'Kings',
        batting: [
            { name: "Priyamsh Arya", out: "c MS Dhoni b Khaleel Ahmed", runs: 23, balls: 15, fours: 5, sixes: 0, sr: 153.33 },
            { name: "Prabhsimran Singh", out: "c Dewald Brevis b Noor Ahmad", runs: 54, balls: 36, fours: 5, sixes: 3, sr: 150.00 },
            { name: "Shreyas Iyer (C)", out: "c Dewald Brevis b Noor Ahmad", runs: 72, balls: 41, fours: 5, sixes: 4, sr: 175.61 },
            { name: "Nehal Wadhera", out: "c Ravindra Jadeja b Matheesha Pathirana", runs: 5, balls: 3, fours: 1, sixes: 0, sr: 166.67 },
            { name: "Shashank Singh", out: "c Dewald Brevis b Ravindra Jadeja", runs: 23, balls: 12, fours: 1, sixes: 2, sr: 191.67 },
            { name: "Josh Inglis (Wk)", out: "not out", runs: 6, balls: 6, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Suryansh Shedge", out: "c Anshul Kamboj b Khaleel Ahmed", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Marco Jansen", out: "not out", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 }
        ],
        extras: { total: 6, details: "(W 3, LB 3)" },
        total: { score: "194", details: "(6 wkts, 19.4 ov)" },
        yetToBat: "Azmatullah Omarzai, Harpreet Brar, Arshdeep Singh, Yuzvendra Chahal",
        fow: "44/1 (P. Arya, 4.4 ov) · 116/2 (P. Singh, 12.6 ov) · 136/3 (N. Wadhera, 14.3 ov) · 180/4 (S. Singh, 17.3 ov) · 188/5 (S. Iyer, 18.4 ov) · 190/6 (S. Shedge, 19.2 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 3.4, maidens: 0, runs: 26, wickets: 2, econ: 7.04 },
            { name: "Anshul Kamboj", overs: 2.0, maidens: 0, runs: 20, wickets: 0, econ: 10.00 },
            { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 32, wickets: 1, econ: 10.67 },
            { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
            { name: "Sam Curran", overs: 3.0, maidens: 0, runs: 27, wickets: 0, econ: 9.00 },
            { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 45, wickets: 2, econ: 11.25 }
        ]
    }
},
// Match 50 (index 49)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '217/2', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '117', overs: '16.1' },
    status: 'MI won by 100 runs',
    toss: "RR won the toss and decided to bowl",
    venue: "Sawai Mansingh Stadium",
    pom: "Suryakumar Yadav", // For his explosive innings
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c & b Mahesh Theekshana", runs: 81, balls: 45, fours: 7, sixes: 3, sr: 180.00 },
            { name: "Rohit Sharma", out: "c Yashasvi Jaiswal b Riyan Parag", runs: 53, balls: 36, fours: 9, sixes: 0, sr: 147.22 },
            { name: "Suryakumar Yadav", out: "not out", runs: 48, balls: 23, fours: 4, sixes: 3, sr: 208.70 },
            { name: "Hardik Pandya (C)", out: "not out", runs: 48, balls: 23, fours: 6, sixes: 1, sr: 208.70 }
        ],
        extras: { total: 7, details: "(W 6, LB 1)" },
        total: { score: "217", details: "(2 wkts, 20 ov)" },
        yetToBat: "Will Jacks, Tilak Varma, Naman Dhir, Corbin Bosch, Deepak Chahar, Trent Boult, Jasprit Bumrah, Karn Sharma",
        fow: "116/1 (R. Rickelton, 11.5 ov) · 123/2 (R. Sharma, 12.4 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 42, wickets: 0, econ: 10.50 },
            { name: "Fazalhaq Farooqi", overs: 4.0, maidens: 0, runs: 34, wickets: 0, econ: 13.50 },
            { name: "Mahesh Theekshana", overs: 4.0, maidens: 0, runs: 47, wickets: 1, econ: 11.75 },
            { name: "Kumar Kartikeya", overs: 2.0, maidens: 0, runs: 22, wickets: 0, econ: 11.00 },
            { name: "Akash Madhwal", overs: 4.0, maidens: 0, runs: 39, wickets: 0, econ: 9.75 },
            { name: "Riyan Parag(C)", overs: 2.0, maidens: 0, runs: 12, wickets: 1, econ: 6.00 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c & b Trent Boult", runs: 13, balls: 6, fours: 0, sixes: 2, sr: 216.67 },
            { name: "Vaibhav Suryavanshi", out: "c Will Jacks b Deepak Chahar", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Nitish Rana", out: "c Hardik Pandya b Trent Boult", runs: 9, balls: 11, fours: 2, sixes: 0, sr: 81.82 },
            { name: "Riyan Parag(C)", out: "c Suryakumar Yadav b Jasprit Bumrah", runs: 16, balls: 8, fours: 3, sixes: 0, sr: 200.00 },
            { name: "Dhruv Jurel (Wk)", out: "not out", runs: 11, balls: 11, fours: 0, sixes: 1, sr: 100.00 },
            { name: "Shimron Hetmyer", out: "c Suryakumar Yadav b Jasprit Bumrah", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Shubham Dubey", out: "not out", runs: 15, balls: 9, fours: 2, sixes: 1, sr: 166.67 },
            { name: "Jofra Archer", out: "c Hardik Pandya b Trent Boult", runs: 30, balls: 27, fours: 2, sixes: 1, sr: 111.11 },
            { name: "Mahesh Theekshana", out: "c Suryakumar Yadav b Karn Sharma", runs: 2, balls: 9, fours: 0, sixes: 0, sr: 22.22 },
            { name: "Kumar Kartikeya", out: "c & b Karn Sharma", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Akash Madhwal", out: "not out", runs: 4, balls: 9, fours: 0, sixes: 0, sr: 44.44 }
        ],
        extras: { total: 15, details: "(W 8, LB 7)" },
        total: { score: "117", details: "(10 wkts, 16.1 ov)" },
        yetToBat: "Fazalhaq Farooqi",
        fow: "1/1 (V. Suryavanshi, 0.4 ov) · 15/2 (Y. Jaiswal, 1.4 ov) · 41/3 (N. Rana, 3.6 ov) · 47/4 (R. Parag, 4.4 ov) · 47/5 (S. Hetmyer, 4.5 ov) · 64/6 (S. Dubey, 7.6 ov) · 76/7 (D. Jurel, 8.6 ov) · 87/8 (M. Theekshana, 11.1 ov) · 91/9 (K. Kartikeya, 11.5 ov) · 117/10 (J. Archer, 16.1 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 2.0, maidens: 0, runs: 13, wickets: 1, econ: 6.50 },
            { name: "Trent Boult", overs: 2.1, maidens: 0, runs: 28, wickets: 3, econ: 12.92 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 15, wickets: 2, econ: 3.75 },
            { name: "Corbin Bosch", overs: 3.0, maidens: 0, runs: 29, wickets: 0, econ: 9.67 },
            { name: "Hardik Pandya (C)", overs: 1.0, maidens: 0, runs: 2, wickets: 1, econ: 2.00 },
            { name: "Karn Sharma", overs: 4.0, maidens: 0, runs: 23, wickets: 3, econ: 5.75 }
        ]
    }
},
// Match 51 (index 50)
{
    team1: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '224/6', overs: '20' },
    team2: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '186/6', overs: '20' },
    status: 'GT won by 38 runs',
    toss: "SRH won the toss and decided to bowl",
    venue: "Narendra Modi Stadium",
    pom: "Shubman Gill", // For his brilliant century
    innings1: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c T Natarajan b Zeeshan Ansari", runs: 48, balls: 23, fours: 9, sixes: 0, sr: 208.70 },
            { name: "Shubman Gill (C)", out: "run out (Harshal Patel)", runs: 76, balls: 35, fours: 10, sixes: 2, sr: 200.00 },
            { name: "Joe Butler (Wk)", out: "c Abhishek Sharma b Pat Cummins", runs: 64, balls: 37, fours: 3, sixes: 4, sr: 172.97 },
            { name: "Washington Sundar", out: "c Shahrukh Khan b Jaydev Unadkat", runs: 21, balls: 16, fours: 0, sixes: 1, sr: 131.25 },
            { name: "Shahrukh Khan", out: "not out", runs: 6, balls: 2, fours: 0, sixes: 1, sr: 300.00 },
            { name: "Rahul Tewatia", out: "c Aniket Verma b Jaydev Unadkat", runs: 8, balls: 3, fours: 0, sixes: 1, sr: 200.00 },
            { name: "Rashid Khan", out: "c & b Jaydev Unadkat", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 3, details: "(W 3)" },
        total: { score: "224", details: "(6 wkts, 20 ov)" },
        yetToBat: "Mohammed Siraj, Gerald Coetzee, Sai Kishore, Prasidh Krishna, Ishant Sharma",
        fow: "8/1 (S. Sudharsan, 0.3 ov) · 149/2 (S. Gill, 12.6 ov) · 209/3 (J. Butler, 18.4 ov) · 218/4 (W. Sundar, 19.2 ov) · 220/5 (R. Tewatia, 19.4 ov) · 224/6 (R. Khan, 19.6 ov)",
        bowling: [
            { name: "Mohammed Shami", overs: 3.0, maidens: 0, runs: 48, wickets: 0, econ: 16.00 },
            { name: "Jaydev Unadkat", overs: 4.0, maidens: 0, runs: 35, wickets: 3, econ: 8.75 },
            { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 15.00 },
            { name: "Harshal Patel", overs: 3.0, maidens: 0, runs: 41, wickets: 0, econ: 13.67 },
            { name: "Zeeshan Ansari", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
            { name: "Karnendu Mavi", overs: 2.0, maidens: 0, runs: 18, wickets: 0, econ: 9.00 }
        ]
    },
    innings2: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Travis Head", out: "c Joe Butler b Prasidh Krishna", runs: 20, balls: 16, fours: 4, sixes: 0, sr: 125.00 },
            { name: "Abhishek Sharma", out: "c Mohammed Siraj b Gerald Coetzee", runs: 74, balls: 41, fours: 6, sixes: 6, sr: 180.49 },
            { name: "Ishan Kishan", out: "c & b Prasidh Krishna", runs: 13, balls: 17, fours: 0, sixes: 0, sr: 76.47 },
            { name: "Heinrich Klaasen (Wk)", out: "not out", runs: 23, balls: 18, fours: 1, sixes: 1, sr: 127.78 },
            { name: "Aniket Verma", out: "c & b Mohammed Siraj", runs: 3, balls: 7, fours: 0, sixes: 0, sr: 42.86 },
            { name: "Nitish Kumar Reddy", out: "not out", runs: 21, balls: 10, fours: 1, sixes: 2, sr: 210.00 },
            { name: "Karnendu Mavi", out: "c Joe Butler b Mohammed Siraj", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Pat Cummins (C)", out: "not out", runs: 19, balls: 10, fours: 1, sixes: 1, sr: 190.00 }
        ],
        extras: { total: 13, details: "(W 7, LB 6)" },
        total: { score: "186", details: "(6 wkts, 20 ov)" },
        yetToBat: "Harshal Patel, Jaydev Unadkat, Zeeshan Ansari, Mohammed Shami",
        fow: "49/1 (T. Head, 4.3 ov) · 82/2 (I. Kishan, 9.3 ov) · 139/3 (A. Sharma, 14.6 ov) · 141/4 (H. Klaasen, 15.3 ov) · 168/5 (A. Verma, 18.4 ov) · 184/6 (K. Mavi, 19.5 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 33, wickets: 2, econ: 8.25 },
            { name: "Ishant Sharma", overs: 3.2, maidens: 0, runs: 35, wickets: 1, econ: 10.50 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 19, wickets: 2, econ: 4.75 },
            { name: "Gerald Coetzee", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
            { name: "Washington Sundar", overs: 1.0, maidens: 0, runs: 6, wickets: 0, econ: 6.00 },
            { name: "Rashid Khan", overs: 3.0, maidens: 0, runs: 50, wickets: 0, econ: 16.67 },
            { name: "Sai Kishore", overs: 0.4, maidens: 0, runs: 1, wickets: 0, econ: 1.50 }
        ]
    }
},
// Match 52 (index 51)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '213/5', overs: '20' },
    team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '211/5', overs: '20' },
    status: 'RCB won by 2 runs',
    toss: "CSK won the toss and decided to bowl",
    venue: "M. Chinnaswamy Stadium",
    pom: "Virat Kohli", // For his match-winning knock
    innings1: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Jacob Bethell", out: "c Dewald Brevis b Matheesha Pathirana", runs: 42, balls: 23, fours: 6, sixes: 2, sr: 182.61 },
            { name: "Virat Kohli", out: "c Khaleel Ahmed b Sam Curran", runs: 82, balls: 33, fours: 5, sixes: 5, sr: 187.88 },
            { name: "Devdutt Padikkal", out: "c Khaleel Ahmed b Matheesha Pathirana", runs: 17, balls: 15, fours: 1, sixes: 1, sr: 113.33 },
            { name: "Rajat Patidar (C)", out: "c Khaleel Ahmed b Matheesha Pathirana", runs: 11, balls: 15, fours: 1, sixes: 0, sr: 73.33 },
            { name: "Jitesh Sharma (Wk)", out: "c Dewald Brevis b Noor Ahmad", runs: 7, balls: 8, fours: 1, sixes: 0, sr: 87.50 },
            { name: "Tim David", out: "not out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Romario Shepherd", out: "not out", runs: 53, balls: 14, fours: 4, sixes: 6, sr: 378.57 }
        ],
        extras: { total: 6, details: "(NB 1, W 4, LB 1)" },
        total: { score: "213", details: "(5 wkts, 20 ov)" },
        yetToBat: "Krunal Pandya, Bhuvneshwar Kumar, Lungi Ngidi, Yash Dayal, Suyash Sharma",
        fow: "97/1 (J. Bethell, 9.5 ov) · 121/2 (V. Kohli, 11.5 ov) · 144/3 (D. Padikkal, 15.1 ov) · 154/4 (R. Patidar, 16.5 ov) · 197/5 (J. Sharma, 17.7 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 3.0, maidens: 0, runs: 65, wickets: 0, econ: 21.67 },
            { name: "Anshul Kamboj", overs: 3.0, maidens: 0, runs: 25, wickets: 0, econ: 8.33 },
            { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 6.50 },
            { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 26, wickets: 0, econ: 8.67 },
            { name: "Sam Curran", overs: 3.0, maidens: 0, runs: 34, wickets: 1, econ: 11.33 },
            { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 36, wickets: 3, econ: 9.00 }
        ]
    },
    innings2: {
        teamName: 'Super Kings',
        batting: [
            { name: "Ayush Mishra", out: "c Krunal Pandya b Lungi Ngidi", runs: 5, balls: 6, fours: 0, sixes: 0, sr: 83.33 },
            { name: "Shaik Rasheed", out: "c & b Krunal Pandya", runs: 34, balls: 18, fours: 2, sixes: 3, sr: 188.89 },
            { name: "Sam Curran", out: "c Krunal Pandya b Lungi Ngidi", runs: 5, balls: 5, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Ravindra Jadeja", out: "not out", runs: 77, balls: 45, fours: 8, sixes: 2, sr: 171.11 },
            { name: "Dewald Brevis", out: "c & b Lungi Ngidi", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Deepak Hooda", out: "c & b Yash Dayal", runs: 12, balls: 8, fours: 0, sixes: 1, sr: 150.00 },
            { name: "Shivam Dube", out: "not out", runs: 8, balls: 3, fours: 0, sixes: 1, sr: 266.67 }
        ],
        extras: { total: 1, details: "(NB 1)" },
        total: { score: "211", details: "(5 wkts, 20 ov)" },
        yetToBat: "Deepak Hooda, Anshul Kamboj, Noor Ahmad, Khaleel Ahmed, Matheesha Pathirana",
        fow: "5/1 (S. Rasheed, 4.3 ov) · 58/2 (S. Curran, 5.4 ov) · 172/3 (A. Mishra, 18.2 ov) · 172/4 (D. Brevis, 18.3 ov) · 201/5 (D. Hooda, 19.3 ov)",
        bowling: [
            { name: "Krunal Pandya", overs: 3.0, maidens: 0, runs: 24, wickets: 1, econ: 8.00 },
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 55, wickets: 0, econ: 13.75 },
            { name: "Yash Dayal", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Lungi Ngidi", overs: 4.0, maidens: 0, runs: 30, wickets: 3, econ: 7.50 },
            { name: "Suyash Sharma", overs: 4.0, maidens: 0, runs: 43, wickets: 0, econ: 10.75 },
            { name: "Romario Shepherd", overs: 1.0, maidens: 0, runs: 18, wickets: 0, econ: 18.00 }
        ]
    }
},
// Match 53 (index 52)
{
    team1: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '206/4', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '205/8', overs: '20' },
    status: 'KKR won by 1 run',
    toss: "KKR won the toss and decided to bat",
    venue: "Eden Gardens",
    pom: "Andre Russell", // For his all-round performance
    innings1: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Rahmanullah Gurbaz (Wk)", out: "c Shimron Hetmyer b Mahesh Theekshana", runs: 39, balls: 28, fours: 4, sixes: 1, sr: 140.00 },
            { name: "Sunil Narine", out: "c & b Vaibhav Arora", runs: 11, balls: 9, fours: 1, sixes: 1, sr: 122.22 },
            { name: "Ajinkya Rahane (C)", out: "c Yashasvi Jaiswal b Riyan Parag", runs: 30, balls: 24, fours: 1, sixes: 2, sr: 125.00 },
            { name: "Angkrish Raghuvanshi", out: "c & b Jofra Archer", runs: 44, balls: 31, fours: 5, sixes: 0, sr: 141.94 },
            { name: "Andre Russell", out: "not out", runs: 57, balls: 25, fours: 4, sixes: 6, sr: 228.00 },
            { name: "Rinku Singh", out: "not out", runs: 12, balls: 6, fours: 1, sixes: 2, sr: 316.67 }
        ],
        extras: { total: 12, details: "(W 7, B 1, LB 2)" },
        total: { score: "206", details: "(4 wkts, 20 ov)" },
        yetToBat: "Venkatesh Iyer, Ramandeep Singh, Moshin Ali, Vaibhav Arora, Varun Chakravarthy, Harshit Rana (IP)",
        fow: "13/1 (S. Narine, 1.6 ov) · 69/2 (R. Gurbaz, 7.3 ov) · 111/3 (A. Rahane, 12.4 ov) · 172/4 (A. Raghuvanshi, 18.1 ov)",
        bowling: [
            { name: "Jofra Archer", overs: 4.0, maidens: 0, runs: 38, wickets: 1, econ: 7.50 },
            { name: "Yuzvinder Singh", overs: 2.0, maidens: 0, runs: 26, wickets: 1, econ: 13.00 },
            { name: "Mahesh Theekshana", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Akash Madhwal", overs: 3.0, maidens: 0, runs: 55, wickets: 0, econ: 16.67 },
            { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 35, wickets: 0, econ: 8.75 },
            { name: "Riyan Parag (C)", overs: 3.0, maidens: 0, runs: 21, wickets: 1, econ: 7.00 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Andre Russell b Varun Chakravarthy", runs: 34, balls: 21, fours: 5, sixes: 1, sr: 161.90 },
            { name: "Vaibhav Suryavanshi", out: "c Ajinkya Rahane b Vaibhav Arora", runs: 4, balls: 2, fours: 1, sixes: 0, sr: 200.00 },
            { name: "Kushal Singh Rathore", out: "c Angkrish Raghuvanshi b Moshin Ali", runs: 0, balls: 5, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Riyan Parag (C)", out: "c Angkrish Raghuvanshi b Harshit Rana", runs: 25, balls: 45, fours: 6, sixes: 8, sr: 211.11 },
            { name: "Dhruv Jurel (Wk)", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Wanindu Hasaranga", out: "c & b Varun Chakravarthy", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Shimron Hetmyer", out: "c & b Sunil Narine b Harshit Rana", runs: 25, balls: 25, fours: 1, sixes: 1, sr: 126.09 },
            { name: "Shubham Dubey (IP)", out: "not out", runs: 25, balls: 14, fours: 1, sixes: 2, sr: 178.57 },
            { name: "Jofra Archer", out: "run out (Rinku Singh)", runs: 12, balls: 8, fours: 1, sixes: 0, sr: 150.00 }
        ],
        extras: { total: 8, details: "(NB 1, W 4, LB 1)" },
        total: { score: "205", details: "(8 wkts, 20 ov)" },
        yetToBat: "Mahesh Theekshana, Yudhvir Singh, Akash Madhwal",
        fow: "5/1 (V. Suryavanshi, 0.4 ov) · 8/2 (K. Rathore, 1.5 ov) · 68/3 (Y. Jaiswal, 6.6 ov) · 71/4 (D. Jurel, 7.3 ov) · 71/5 (W. Hasaranga, 7.5 ov) · 163/6 (S. Hetmyer, 15.5 ov) · 173/7 (R. Parag, 17.2 ov) · 203/8 (J. Archer, 19.6 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 50, wickets: 1, econ: 12.50 },
            { name: "Moshin Ali", overs: 3.0, maidens: 0, runs: 43, wickets: 2, econ: 14.33 },
            { name: "Harshit Rana (IP)", overs: 4.0, maidens: 0, runs: 41, wickets: 2, econ: 10.25 },
            { name: "Varun Chakravarthy", overs: 4.0, maidens: 0, runs: 32, wickets: 2, econ: 8.00 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 27, wickets: 0, econ: 6.75 },
            { name: "Andre Russell", overs: 1.0, maidens: 0, runs: 11, wickets: 0, econ: 11.00 }
        ]
    }
},
// Match 54 (index 53)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '236/5', overs: '20' },
    team2: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '199/7', overs: '20' },
    status: 'PBKS won by 37 runs',
    toss: "LSG won the toss and decided to bowl",
    venue: "HPCA Stadium",
    pom: "Prabhsimran Singh", // For his outstanding century
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyamnesh Arya", out: "c Mayank Yadav b Akash Singh", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 },
            { name: "Prabhsimran Singh", out: "c Nicholas Pooran b Digvesh Rathi", runs: 91, balls: 48, fours: 6, sixes: 7, sr: 189.58 },
            { name: "Josh Inglis (Wk)", out: "c Mayank Yadav b Akash Singh", runs: 30, balls: 14, fours: 1, sixes: 4, sr: 214.29 },
            { name: "Shreyas Iyer (C)", out: "c David Miller b Digvesh Rathi", runs: 45, balls: 25, fours: 4, sixes: 2, sr: 180.00 },
            { name: "Nishat Wadhera", out: "c Avesh Khan b Prince Yadav", runs: 56, balls: 9, fours: 2, sixes: 1, sr: 177.78 },
            { name: "Shashank Singh", out: "not out", runs: 33, balls: 15, fours: 4, sixes: 1, sr: 220.00 },
            { name: "Marcus Stoinis", out: "not out", runs: 15, balls: 5, fours: 1, sixes: 1, sr: 300.00 }
        ],
        extras: { total: 5, details: "(W 5)" },
        total: { score: "236", details: "(5 wkts, 20 ov)" },
        yetToBat: "Azmatullah Omarzai, Marco Jansen, Yuzvendra Chahal, Arshdeep Singh, Vyshak Vijay Kumar (IP)",
        fow: "4/1 (P. Arya, 0.6 ov) · 50/2 (J. Inglis, 4.3 ov) · 128/3 (S. Iyer, 12.2 ov) · 162/4 (N. Wadhera, 15.2 ov) · 218/5 (P. Singh, 18.5 ov)",
        bowling: [
            { name: "Akash Singh", overs: 4.0, maidens: 0, runs: 36, wickets: 2, econ: 7.50 },
            { name: "Mayank Yadav", overs: 4.0, maidens: 0, runs: 60, wickets: 0, econ: 15.00 },
            { name: "Avesh Khan", overs: 4.0, maidens: 0, runs: 57, wickets: 0, econ: 14.25 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 46, wickets: 2, econ: 11.50 },
            { name: "Prince Yadav", overs: 4.0, maidens: 0, runs: 43, wickets: 1, econ: 10.75 }
        ]
    },
    innings2: {
        teamName: 'Super Giants',
        batting: [
            { name: "Aiden Markram", out: "c & b Arshdeep Singh", runs: 13, balls: 10, fours: 1, sixes: 1, sr: 130.00 },
            { name: "Vyshak Vijay Kumar (IP)", out: "c Nishat Wadhera b Arshdeep Singh", runs: 0, balls: 5, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Nicholas Pooran", out: "b Arshdeep Singh", runs: 6, balls: 5, fours: 1, sixes: 0, sr: 120.00 },
            { name: "Rishabh Pant (C) (Wk)", out: "c Arshdeep Singh b Azmatullah Omarzai", runs: 18, balls: 17, fours: 2, sixes: 1, sr: 105.88 },
            { name: "Ayush Badoni", out: "c Arshdeep Singh b Yuzvendra Chahal", runs: 74, balls: 40, fours: 5, sixes: 5, sr: 185.00 },
            { name: "David Miller", out: "c Arshdeep Singh b Azmatullah Omarzai", runs: 11, balls: 8, fours: 0, sixes: 1, sr: 137.50 },
            { name: "Abdul Samad", out: "c Arshdeep Singh b Marco Jansen", runs: 45, balls: 24, fours: 2, sixes: 4, sr: 187.50 },
            { name: "Avesh Khan", out: "not out", runs: 19, balls: 10, fours: 3, sixes: 1, sr: 190.00 },
            { name: "Prince Yadav", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 12, details: "(W 9, LB 3)" },
        total: { score: "199", details: "(7 wkts, 20 ov)" },
        yetToBat: "Mayank Yadav, Digvesh Rathi, Akash Singh",
        fow: "1/1 (V. Kumar, 0.2 ov) · 16/2 (A. Markram, 2.6 ov) · 27/3 (N. Pooran, 4.6 ov) · 58/4 (R. Pant, 7.5 ov) · 73/5 (D. Miller, 9.5 ov) · 154/6 (A. Samad, 16.4 ov) · 188/7 (A. Badoni, 19.1 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 16, wickets: 3, econ: 4.00 },
            { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 31, wickets: 1, econ: 7.75 },
            { name: "Azmatullah Omarzai", overs: 4.0, maidens: 0, runs: 33, wickets: 2, econ: 8.25 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 50, wickets: 1, econ: 12.50 },
            { name: "Vyshak Vijay Kumar (IP)", overs: 3.0, maidens: 0, runs: 49, wickets: 0, econ: 16.33 },
            { name: "Marcus Stoinis", overs: 1.0, maidens: 0, runs: 17, wickets: 0, econ: 17.00 }
        ]
    }
},
// Match 55 (index 54)
{
    team1: { name: 'DC', logo: 'Logos/dc_logo.png', score: '133/7', overs: '20' },
    team2: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '', overs: '' },
    status: 'No result',
    toss: "SRH won the toss and decided to bowl",
    venue: "Rajiv Gandhi International Stadium",
    pom: "Tristan Stubbs", // For his fighting knock in a tough situation
    innings1: {
        teamName: 'Capitals',
        batting: [
            { name: "Karun Nair", out: "c Tristan Stubbs b Pat Cummins", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Faf du Plessis", out: "c Ishan Kishan b Pat Cummins", runs: 3, balls: 8, fours: 0, sixes: 0, sr: 37.50 },
            { name: "Abishek Porel", out: "c Ishan Kishan b Pat Cummins", runs: 8, balls: 10, fours: 1, sixes: 0, sr: 80.00 },
            { name: "KL Rahul (Wk)", out: "c Travis Head b Jaydev Unadkat", runs: 10, balls: 14, fours: 1, sixes: 0, sr: 71.43 },
            { name: "Axar Patel (C)", out: "c Travis Head b Harshal Patel", runs: 6, balls: 7, fours: 1, sixes: 0, sr: 85.71 },
            { name: "Tristan Stubbs", out: "not out", runs: 41, balls: 36, fours: 4, sixes: 0, sr: 113.89 },
            { name: "Vipraj Nigam", out: "run out (Kuldeep Yadav)", runs: 18, balls: 17, fours: 1, sixes: 1, sr: 105.88 },
            { name: "Ashutosh Sharma", out: "c Tristan Stubbs b Eshan Malinga", runs: 41, balls: 26, fours: 2, sixes: 3, sr: 157.69 },
            { name: "Mitchell Starc", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 5, details: "(W 3, LB 2)" },
        total: { score: "133", details: "(7 wkts, 20 ov)" },
        yetToBat: "Dushmantha Chameera, Kuldeep Yadav, T. Natarajan",
        fow: "0/1 (K. Nair, 0.1 ov) · 6/2 (F. du Plessis, 2.1 ov) · 12/3 (A. Porel, 4.1 ov) · 26/4 (A. Patel, 5.5 ov) · 23/5 (KL Rahul, 7.1 ov) · 82/6 (V. Nigam, 12.1 ov) · 129/7 (A. Sharma, 19.4 ov)",
        bowling: [
            { name: "Pat Cummins", overs: 4.0, maidens: 0, runs: 12, wickets: 3, econ: 4.75 },
            { name: "Jaydev Unadkat", overs: 4.0, maidens: 0, runs: 13, wickets: 1, econ: 3.25 },
            { name: "Harshal Patel", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
            { name: "Eshan Malinga", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 7.00 },
            { name: "Zeeshan Ansari", overs: 3.0, maidens: 0, runs: 30, wickets: 0, econ: 10.00 },
            { name: "Abhishek Sharma", overs: 1.0, maidens: 0, runs: 5, wickets: 0, econ: 5.00 }
        ]
    },
    innings2: {
        teamName: 'Sunrisers',
        batting: [],
        extras: {},
        total: {},
        yetToBat: "",
        fow: "",
        bowling: []
    }
},
// Match 56 (index 55)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '155/8', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '147/7', overs: '19' },
    status: 'GT won by 3 wickets (0 balls left) (DLS method)',
    toss: "GT won the toss and decided to bowl",
    venue: "Wankhede Stadium",
    pom: "Will Jacks", // For his match-winning innings
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c Shubman Gill b Mohammed Siraj", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Rohit Sharma", out: "c Prasidh Krishna b Arshad Khan", runs: 7, balls: 8, fours: 1, sixes: 0, sr: 87.50 },
            { name: "Will Jacks", out: "c Sai Sudharsan b Rashid Khan", runs: 53, balls: 35, fours: 5, sixes: 3, sr: 151.43 },
            { name: "Tilak Varma", out: "c Shubman Gill b Gerald Coetzee", runs: 7, balls: 7, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Hardik Pandya (C)", out: "c Shubman Gill b Sai Kishore", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Naman Dhir", out: "c Shubman Gill b Prasidh Krishna", runs: 7, balls: 10, fours: 1, sixes: 0, sr: 70.00 },
            { name: "Corbin Bosch", out: "run out (Rashid Khan)", runs: 27, balls: 22, fours: 1, sixes: 2, sr: 122.73 },
            { name: "Deepak Chahar", out: "not out", runs: 8, balls: 8, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Karn Sharma", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 7, details: "(W 1, LB 6)" },
        total: { score: "155", details: "(8 wkts, 20 ov)" },
        yetToBat: "Suryakumar Yadav, Trent Boult, Jasprit Bumrah, Ashwani Kumar",
        fow: "2/1 (R. Rickelton, 0.2 ov) · 26/2 (R. Sharma, 3.3 ov) · 103/4 (W. Jacks, 11.4 ov) · 106/5 (H. Pandya, 12.3 ov) · 113/6 (T. Varma, 13.5 ov) · 123/7 (N. Dhir, 16.2 ov) · 150/8 (C. Bosch, 19.4 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 3.0, maidens: 0, runs: 29, wickets: 1, econ: 9.67 },
            { name: "Arshad Khan", overs: 3.0, maidens: 0, runs: 18, wickets: 1, econ: 6.00 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
            { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 34, wickets: 2, econ: 8.50 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 21, wickets: 1, econ: 5.25 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Ryan Rickelton b Trent Boult", runs: 9, balls: 5, fours: 1, sixes: 0, sr: 180.00 },
            { name: "Shubman Gill", out: "c Jasprit Bumrah", runs: 43, balls: 46, fours: 3, sixes: 1, sr: 93.48 },
            { name: "Joe Butler (Wk)", out: "c Ryan Rickelton b Ashwani Kumar", runs: 38, balls: 27, fours: 3, sixes: 1, sr: 111.11 },
            { name: "Sherfane Rutherford", out: "not out", runs: 28, balls: 15, fours: 2, sixes: 2, sr: 186.67 },
            { name: "Shahrukh Khan", out: "c Jasprit Bumrah", runs: 6, balls: 8, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Rahul Tewatia", out: "not out", runs: 11, balls: 8, fours: 1, sixes: 0, sr: 137.50 },
            { name: "Rashid Khan", out: "c Hardik Pandya b Jasprit Bumrah", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Gerald Coetzee", out: "c Hardik Pandya b Deepak Chahar", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.00 },
            { name: "Arshad Khan", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 9, details: "(NB 3, W 6)" },
        total: { score: "147", details: "(7 wkts, 19 ov)" },
        yetToBat: "Sai Kishore, Mohammed Siraj, Prasidh Krishna",
        fow: "9/1 (S. Sudharsan, 1.2 ov) · 78/2 (J. Butler, 11.3 ov) · 111/3 (S. Gill, 14.5 ov) · 115/4 (S. Rutherford, 15.3 ov) · 123/5 (S. Khan, 16.4 ov) · 146/7 (R. Khan, 17.2 ov) · 128/8 (H. Khan, 17.2 ov)",
        bowling: [
            { name: "Deepak Chahar", overs: 3.0, maidens: 0, runs: 32, wickets: 1, econ: 10.67 },
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 22, wickets: 2, econ: 5.50 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 19, wickets: 2, econ: 4.75 },
            { name: "Hardik Pandya (C)", overs: 1.0, maidens: 0, runs: 18, wickets: 0, econ: 18.00 },
            { name: "Karn Sharma", overs: 2.0, maidens: 0, runs: 13, wickets: 0, econ: 6.50 },
            { name: "Ashwani Kumar", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
            { name: "Will Jacks", overs: 1.0, maidens: 0, runs: 15, wickets: 0, econ: 15.00 }
        ]
    }
},
// Match 57 (index 56)
{
    team1: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '179/6', overs: '20' },
    team2: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '183/8', overs: '19.4' },
    status: 'CSK won by 2 wickets (2 balls left)',
    toss: "KKR won the toss and decided to bat",
    venue: "Eden Gardens",
    pom: "Shivam Dube", // For his explosive, match-winning fifty
    innings1: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Rahmanullah Gurbaz (Wk)", out: "c Noor Ahmad b Anshul Kamboj", runs: 11, balls: 9, fours: 1, sixes: 1, sr: 122.22 },
            { name: "Sunil Narine", out: "c MS Dhoni b Noor Ahmad", runs: 28, balls: 17, fours: 4, sixes: 1, sr: 152.94 },
            { name: "Ajinkya Rahane (C)", out: "c Devon Conway b Ravindra Jadeja", runs: 48, balls: 33, fours: 4, sixes: 2, sr: 145.45 },
            { name: "Angkrish Raghuvanshi", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Manish Pandey", out: "not out", runs: 36, balls: 28, fours: 1, sixes: 1, sr: 128.57 },
            { name: "Andre Russell", out: "c Dewald Brevis b Noor Ahmad", runs: 38, balls: 21, fours: 4, sixes: 3, sr: 180.95 },
            { name: "Rinku Singh", out: "c MS Dhoni b Noor Ahmad", runs: 9, balls: 6, fours: 2, sixes: 0, sr: 150.00 },
            { name: "Ramandeep Singh", out: "not out", runs: 4, balls: 4, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 6, details: "(W 2, LB 4)" },
        total: { score: "179", details: "(6 wkts, 20 ov)" },
        yetToBat: "Moeen Ali, Vaibhav Arora, Varun Chakaravarthy, Harshit Rana",
        fow: "11/1 (R. Gurbaz, 1.3 ov) · 62/2 (S. Narine, 7.1 ov) · 71/3 (A. Raghuvanshi, 7.4 ov) · 103/4 (A. Rahane, 13.5 ov) · 148/5 (A. Russell, 16.6 ov) · 161/6 (R. Singh, 18.5 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 2.0, maidens: 0, runs: 14, wickets: 0, econ: 7.00 },
            { name: "Anshul Kamboj", overs: 3.0, maidens: 0, runs: 38, wickets: 1, econ: 12.67 },
            { name: "Ravichandran Ashwin", overs: 3.0, maidens: 0, runs: 19, wickets: 0, econ: 6.33 },
            { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 31, wickets: 4, econ: 7.75 },
            { name: "Ravindra Jadeja", overs: 4.0, maidens: 0, runs: 34, wickets: 1, econ: 8.50 },
            { name: "Matheesha Pathirana", overs: 4.0, maidens: 0, runs: 39, wickets: 0, econ: 9.75 }
        ]
    },
    innings2: {
        teamName: 'Super Kings',
        batting: [
            { name: "Ayush Mishra", out: "c Rinku Singh b Vaibhav Arora", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Devon Conway", out: "c Rinku Singh b Vaibhav Arora", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Ujwal Patel", out: "c Varun Chakaravarthy b Harshit Rana", runs: 31, balls: 11, fours: 1, sixes: 4, sr: 281.82 },
            { name: "Ravichandran Ashwin", out: "c Andre Russell b Harshit Rana", runs: 8, balls: 7, fours: 1, sixes: 0, sr: 114.29 },
            { name: "Ravindra Jadeja", out: "not out", runs: 19, balls: 10, fours: 2, sixes: 1, sr: 190.00 },
            { name: "Dewald Brevis", out: "c Rinku Singh b Varun Chakaravarthy", runs: 52, balls: 25, fours: 4, sixes: 4, sr: 208.00 },
            { name: "Shivam Dube", out: "c Rinku Singh b Vaibhav Arora", runs: 45, balls: 40, fours: 2, sixes: 3, sr: 112.50 },
            { name: "MS Dhoni (C) (Wk)", out: "c Rinku Singh b Vaibhav Arora", runs: 17, balls: 18, fours: 0, sixes: 1, sr: 94.44 },
            { name: "Noor Ahmad", out: "c Rinku Singh b Vaibhav Arora", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Anshul Kamboj", out: "not out", runs: 4, balls: 1, fours: 1, sixes: 0, sr: 400.00 }
        ],
        extras: { total: 5, details: "(W 4, LB 1)" },
        total: { score: "183", details: "(8 wkts, 19.4 ov)" },
        yetToBat: "Khaleel Ahmed, Matheesha Pathirana",
        fow: "0/1 (A. Mishra, 0.2 ov) · 25/2 (D. Conway, 1.5 ov) · 37/3 (U. Patel, 2.6 ov) · 58/4 (R. Ashwin, 4.5 ov) · 60/5 (R. Jadeja, 5.2 ov) · 127/6 (D. Brevis, 12.1 ov) · 170/7 (S. Dube, 18.2 ov) · 172/8 (MS Dhoni, 18.6 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 3.0, maidens: 0, runs: 48, wickets: 3, econ: 16.00 },
            { name: "Moeen Ali", overs: 2.0, maidens: 0, runs: 23, wickets: 1, econ: 11.50 },
            { name: "Harshit Rana", overs: 4.0, maidens: 0, runs: 43, wickets: 2, econ: 10.75 },
            { name: "Varun Chakaravarthy", overs: 4.0, maidens: 0, runs: 18, wickets: 2, econ: 4.50 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 28, wickets: 0, econ: 7.00 },
            { name: "Andre Russell", overs: 2.6, maidens: 0, runs: 22, wickets: 0, econ: 8.25 }
        ]
    }
},
// Match 58 to 67 (index 57 to 66) - Suspended
    { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true }, { suspended: true },

// Match 68(index 67)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '', overs: '' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '', overs: '' },
    status: 'Match abandoned without a ball bowled',
    toss: "",
    venue: "", // Venue not specified in the image
    pom: "N/A",
    innings1: {
        teamName: 'Royal Challengers',
        batting: [],
        extras: {},
        total: {},
        yetToBat: "",
        fow: "",
        bowling: []
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [],
        extras: {},
        total: {},
        yetToBat: "",
        fow: "",
        bowling: []
    }
},
// Match 69 (index 68)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '219/5', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '209/7', overs: '20' },
    status: 'PBKS won by 10 runs',
    toss: "PBKS won the toss and decided to bat",
    venue: "Sawai Mansingh Stadium",
    pom: "Nahal Wadhera", // For his match-winning 72 runs
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyamsh Arya", out: "c Shimron Hetmyer b Tushar Deshpande", runs: 9, balls: 7, fours: 1, sixes: 0, sr: 128.57 },
            { name: "Prabhsimran Singh (Wk)", out: "c Shimron Hetmyer b Tushar Deshpande", runs: 21, balls: 10, fours: 3, sixes: 1, sr: 210.00 },
            { name: "Mitchell Owen", out: "c Riyan Parag b Kwena Maphaka", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Nahal Wadhera", out: "c Riyan Parag b Akash Madhwal", runs: 72, balls: 37, fours: 5, sixes: 5, sr: 182.19 },
            { name: "Shreyas Iyer (C)", out: "c Yashasvi Jaiswal b Riyan Parag", runs: 36, balls: 30, fours: 3, sixes: 0, sr: 120.00 },
            { name: "Shashank Singh", out: "not out", runs: 59, balls: 30, fours: 5, sixes: 3, sr: 196.67 },
            { name: "Armaan Jaffer", out: "not out", runs: 21, balls: 9, fours: 3, sixes: 1, sr: 233.33 }
        ],
        extras: { total: 9, details: "(W 5, LB 4)" },
        total: { score: "219", details: "(5 wkts, 20 ov)" },
        yetToBat: "Marco Jansen, Xavier Bartlett, Arshdeep Singh, Yuzvendra Chahal, Harpreet Brar",
        fow: "19/1 (P. Arya, 1.5 ov) · 34/2 (M. Owen, 2.8 ov) · 34/3 (P. Singh, 3.1 ov) · 101/4 (S. Iyer, 10.5 ov) · 139/5 (N. Wadhera, 13.6 ov)",
        bowling: [
            { name: "Fazalhaq Farooqi", overs: 3.0, maidens: 0, runs: 39, wickets: 0, econ: 13.00 },
            { name: "Tushar Deshpande", overs: 4.0, maidens: 0, runs: 37, wickets: 2, econ: 9.25 },
            { name: "Kwena Maphaka", overs: 3.0, maidens: 0, runs: 32, wickets: 1, econ: 10.67 },
            { name: "Riyan Parag", overs: 3.0, maidens: 0, runs: 28, wickets: 1, econ: 8.67 },
            { name: "Wanindu Hasaranga", overs: 3.0, maidens: 0, runs: 33, wickets: 0, econ: 11.00 },
            { name: "Akash Madhwal", overs: 4.0, maidens: 0, runs: 48, wickets: 1, econ: 12.00 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Mitchell Owen b Harpreet Brar", runs: 60, balls: 28, fours: 8, sixes: 1, sr: 200.00 },
            { name: "Vaibhav Suryavanshi", out: "c Xavier Bartlett b Harpreet Brar", runs: 40, balls: 15, fours: 4, sixes: 4, sr: 266.67 },
            { name: "Sanju Samson (C) (Wk)", out: "c Xavier Bartlett b Armaan Jaffer", runs: 26, balls: 18, fours: 1, sixes: 1, sr: 125.00 },
            { name: "Riyan Parag", out: "c Marco Jansen b Harpreet Brar", runs: 13, balls: 11, fours: 0, sixes: 1, sr: 118.18 },
            { name: "Dhruv Jurel", out: "c Mitchell Owen b Marco Jansen", runs: 53, balls: 31, fours: 3, sixes: 4, sr: 170.97 },
            { name: "Shimron Hetmyer", out: "c Xavier Bartlett b Armaan Jaffer", runs: 11, balls: 12, fours: 1, sixes: 0, sr: 91.67 },
            { name: "Shubham Dubey", out: "not out", runs: 7, balls: 7, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Wanindu Hasaranga", out: "c Xavier Bartlett b Marco Jansen", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Kwena Maphaka", out: "not out", runs: 8, balls: 2, fours: 2, sixes: 0, sr: 400.00 }
        ],
        extras: { total: 7, details: "(W 7)" },
        total: { score: "209", details: "(7 wkts, 20 ov)" },
        yetToBat: "Tushar Deshpande, Akash Madhwal, Fazalhaq Farooqi",
        fow: "78/1 (V. Suryavanshi, 4.5 ov) · 109/2 (Y. Jaiswal, 5.4 ov) · 114/3 (S. Samson, 10.2 ov) · 148/4 (R. Parag, 15.2 ov) · 181/5 (S. Hetmyer, 17.2 ov) · 200/6 (D. Jurel, 19.3 ov) · 200/7 (W. Hasaranga, 19.4 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 60, wickets: 0, econ: 15.00 },
            { name: "Marco Jansen", overs: 3.0, maidens: 0, runs: 41, wickets: 2, econ: 13.67 },
            { name: "Xavier Bartlett", overs: 1.0, maidens: 0, runs: 12, wickets: 0, econ: 12.00 },
            { name: "Harpreet Brar", overs: 4.0, maidens: 0, runs: 22, wickets: 3, econ: 5.50 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 30, wickets: 0, econ: 7.50 },
            { name: "Armaan Jaffer", overs: 4.0, maidens: 0, runs: 44, wickets: 2, econ: 11.00 }
        ]
    }
},
// Match 70 (index 69)
{
    team1: { name: 'DC', logo: 'dc_logo.jpg', score: '199/3', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '205/0', overs: '19' },
    status: 'GT won by 10 wickets (6 balls left)',
    toss: "GT won the toss and decided to bowl",
    venue: "Arun Jaitley",
    pom: "Sai Sudharsan", // For his unbeaten century
    innings1: {
        teamName: 'Capitals',
        batting: [
            { name: "KL Rahul", out: "not out", runs: 112, balls: 61, fours: 12, sixes: 4, sr: 177.31 },
            { name: "Faf du Plessis", out: "c Mohammed Siraj b Arshad Khan", runs: 5, balls: 10, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Abishek Porel (Wk)", out: "c Sai Kishore b Mohammed Siraj", runs: 30, balls: 19, fours: 1, sixes: 3, sr: 157.89 },
            { name: "Axar Patel (C)", out: "c Mohammed Siraj b Prasidh Krishna", runs: 25, balls: 16, fours: 2, sixes: 1, sr: 156.25 },
            { name: "Tristan Stubbs", out: "not out", runs: 21, balls: 10, fours: 0, sixes: 2, sr: 210.00 }
        ],
        extras: { total: 8, details: "(W 4, LB 2)" },
        total: { score: "199", details: "(3 wkts, 20 ov)" },
        yetToBat: "Shahrukh Khan, Ashutosh Sharma, Vipraj Nigam, K. Natarajan, Kuldeep Yadav, Mustafizur Rahman, Dushmantha Chameera",
        fow: "18/1 (F. du Plessis, 3.2 ov) · 108/2 (A. Porel, 11.6 ov) · 151/3 (A. Patel, 16.2 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 37, wickets: 0, econ: 9.25 },
            { name: "Arshad Khan", overs: 2.0, maidens: 0, runs: 7, wickets: 1, econ: 3.50 },
            { name: "Kagiso Rabada", overs: 2.0, maidens: 0, runs: 34, wickets: 0, econ: 17.00 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 32, wickets: 0, econ: 8.00 },
            { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 47, wickets: 1, econ: 11.75 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "not out", runs: 108, balls: 61, fours: 12, sixes: 4, sr: 177.05 },
            { name: "Shubman Gill (C)", out: "not out", runs: 93, balls: 53, fours: 3, sixes: 7, sr: 175.47 }
        ],
        extras: { total: 4, details: "(W 3, LB 1)" },
        total: { score: "205", details: "(0 wkts, 19 ov)" },
        yetToBat: "Joe Butler (Wk), Shane Rutherford, Shahrukh Khan, Rahul Tewatia, Rashid Khan, Prasidh Krishna, Sai Kishore, Mohammed Siraj, Prasidh Krishna",
        fow: "",
        bowling: [
            { name: "Axar Patel (C)", overs: 3.0, maidens: 0, runs: 35, wickets: 0, econ: 11.67 },
            { name: "T. Natarajan", overs: 3.0, maidens: 0, runs: 49, wickets: 0, econ: 16.33 },
            { name: "Mustafizur Rahman", overs: 3.0, maidens: 0, runs: 24, wickets: 0, econ: 8.00 },
            { name: "Dushmantha Chameera", overs: 2.0, maidens: 0, runs: 22, wickets: 0, econ: 11.00 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 37, wickets: 0, econ: 9.25 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 37, wickets: 0, econ: 9.25 }
        ]
    }
},
// Match 71 (index 70)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '205/7', overs: '20' },
    team2: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '206/4', overs: '18.2' },
    status: 'SRH won by 6 wickets (10 balls left)',
    toss: "SRH won the toss and decided to bowl",
    venue: "Ekana Cricket Stadium B Ground",
    pom: "Abhishek Sharma", // For his explosive 58 off 29 balls
    innings1: {
        teamName: 'Super Giants',
        batting: [
            { name: "Mitchell Marsh", out: "c Eshan Malinga b Harish Dubey", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Aiden Markram", out: "b Harshal Patel", runs: 81, balls: 38, fours: 4, sixes: 4, sr: 180.53 },
            { name: "Rishabh Pant (C) (Wk)", out: "c & b Harshal Patel", runs: 7, balls: 6, fours: 1, sixes: 0, sr: 116.67 },
            { name: "Nicholas Pooran", out: "c Nitish Kumar Reddy b Eshan Malinga", runs: 45, balls: 26, fours: 6, sixes: 1, sr: 173.08 },
            { name: "Ayush Badoni", out: "c Nitish Kumar Reddy b Eshan Malinga", runs: 3, balls: 5, fours: 0, sixes: 0, sr: 60.00 },
            { name: "Abdul Samad", out: "c Nitish Kumar Reddy", runs: 3, balls: 6, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Shardul Thakur", out: "c Harshal Patel b Pat Cummins", runs: 4, balls: 1, fours: 1, sixes: 0, sr: 400.00 },
            { name: "Ravi Bishnoi", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Akaash Deep", out: "not out", runs: 6, balls: 1, fours: 0, sixes: 1, sr: 600.00 }
        ],
        extras: { total: 11, details: "(NB 2, W 9)" },
        total: { score: "205", details: "(7 wkts, 20 ov)" },
        yetToBat: "Digwash Rathi, Will O'Rourke",
        fow: "115/1 (M. Marsh, 10.3 ov) · 124/2 (R. Pant, 11.6 ov) · 150/3 (A. Markram, 15.4 ov) · 160/4 (A. Badoni, 17.4 ov) · 194/5 (N. Pooran, 19.3 ov) · 199/6 (S. Thakur, 19.4 ov) · 199/7 (A. Samad, 19.5 ov)",
        bowling: [
            { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 34, wickets: 0, econ: 8.50 },
            { name: "Harish Dubey", overs: 4.0, maidens: 0, runs: 44, wickets: 1, econ: 11.00 },
            { name: "Harshal Patel", overs: 4.0, maidens: 0, runs: 49, wickets: 1, econ: 12.25 },
            { name: "Eshan Malinga", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
            { name: "Zeeshan Ansari", overs: 2.0, maidens: 0, runs: 22, wickets: 0, econ: 11.00 },
            { name: "Nitish Kumar Reddy", overs: 2.0, maidens: 0, runs: 28, wickets: 1, econ: 14.00 }
        ]
    },
    innings2: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Atharva Taide", out: "c Digwash Rathi b Will O'Rourke", runs: 13, balls: 9, fours: 2, sixes: 0, sr: 144.44 },
            { name: "Abhishek Sharma", out: "c Shardul Thakur b Digwash Rathi", runs: 58, balls: 29, fours: 4, sixes: 6, sr: 200.00 },
            { name: "Ishan Kishan (Wk)", out: "c Aiden Markram b Ravi Bishnoi", runs: 35, balls: 28, fours: 3, sixes: 2, sr: 125.00 },
            { name: "Heinrich Klaasen", out: "c Ayush Badoni b Shardul Thakur", runs: 47, balls: 28, fours: 4, sixes: 1, sr: 167.86 },
            { name: "Karnewadu Mendis", out: "retired hurt", runs: 32, balls: 21, fours: 3, sixes: 0, sr: 152.38 },
            { name: "Aniket Verma", out: "not out", runs: 5, balls: 2, fours: 1, sixes: 0, sr: 250.00 },
            { name: "Nitish Kumar Reddy", out: "not out", runs: 5, balls: 2, fours: 1, sixes: 0, sr: 250.00 }
        ],
        extras: { total: 10, details: "(W 9, LB 1)" },
        total: { score: "206", details: "(4 wkts, 18.2 ov)" },
        yetToBat: "Pat Cummins (C), Harshal Patel, Harish Dubey, Zeeshan Ansari, Eshan Malinga",
        fow: "17/1 (A. Taide, 1.4 ov) · 95/2 (A. Sharma, 7.3 ov) · 140/3 (I. Kishan, 11.3 ov) · 195/4 (H. Klaasen, 17.3 ov)",
        bowling: [
            { name: "Akaash Deep", overs: 3.0, maidens: 0, runs: 33, wickets: 0, econ: 11.00 },
            { name: "Will O'Rourke", overs: 2.2, maidens: 0, runs: 31, wickets: 1, econ: 13.29 },
            { name: "Digwash Rathi", overs: 4.0, maidens: 0, runs: 37, wickets: 2, econ: 9.25 },
            { name: "Avesh Khan", overs: 3.0, maidens: 0, runs: 25, wickets: 0, econ: 8.33 },
            { name: "Ravi Bishnoi", overs: 1.0, maidens: 0, runs: 26, wickets: 0, econ: 26.00 },
            { name: "Aiden Markram", overs: 1.0, maidens: 0, runs: 14, wickets: 0, econ: 14.00 },
            { name: "Shardul Thakur", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 }
        ]
    }
},
// Match 72 (index 71)
{
    team1: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '187/8', overs: '20' },
    team2: { name: 'RR', logo: 'Logos/rr_logo.jpg', score: '188/4', overs: '17.1' },
    status: 'RR won by 6 wickets (17 balls left)',
    toss: "RR won the toss and decided to bowl",
    venue: "Arun Jaitley",
    pom: "Vaibhav Suryavanshi", // For his match-winning 57 off 33 balls
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Ayush Mishra", out: "c Kwena Maphaka b Tushar Deshpande", runs: 43, balls: 20, fours: 8, sixes: 1, sr: 215.00 },
            { name: "Devon Conway", out: "c Kwena Maphaka b Tushar Deshpande", runs: 16, balls: 8, fours: 2, sixes: 0, sr: 125.00 },
            { name: "Udit Patel", out: "c Kwena Maphaka b Yudhvir Singh", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Ravichandran Ashwin", out: "c Dhruv Jurel b Wanindu Hasaranga", runs: 13, balls: 8, fours: 1, sixes: 1, sr: 162.50 },
            { name: "Ravindra Jadeja", out: "c Dhruv Jurel b Yudhvir Singh", runs: 1, balls: 5, fours: 0, sixes: 0, sr: 20.00 },
            { name: "Shivam Dube", out: "c Akash Madhwal", runs: 42, balls: 25, fours: 2, sixes: 3, sr: 168.00 },
            { name: "Sameer Rizvi", out: "c Yashasvi Jaiswal b Akash Madhwal", runs: 39, balls: 32, fours: 2, sixes: 2, sr: 121.88 },
            { name: "MS Dhoni (C) (Wk)", out: "c Yashasvi Jaiswal b Akash Madhwal", runs: 16, balls: 17, fours: 0, sixes: 1, sr: 94.12 },
            { name: "Anshul Kamboj", out: "not out", runs: 5, balls: 3, fours: 1, sixes: 0, sr: 166.67 },
            { name: "Noor Ahmad", out: "not out", runs: 2, balls: 1, fours: 0, sixes: 0, sr: 200.00 }
        ],
        extras: { total: 16, details: "(NB 1, W 12, LB 3)" },
        total: { score: "187", details: "(8 wkts, 20 ov)" },
        yetToBat: "Khaleel Ahmed, Matheesha Pathirana",
        fow: "12/1 (D. Conway, 1.4 ov) · 12/2 (U. Patel, 1.6 ov) · 69/3 (A. Mishra, 5.5 ov) · 70/4 (R. Ashwin, 6.3 ov) · 78/5 (R. Jadeja, 7.4 ov) · 137/6 (S. Dube, 13.4 ov) · 180/7 (S. Rizvi, 19.1 ov) · 185/8 (MS Dhoni, 19.5 ov)",
        bowling: [
            { name: "Tushar Deshpande", overs: 4.0, maidens: 0, runs: 33, wickets: 1, econ: 8.25 },
            { name: "Yudhvir Singh", overs: 4.0, maidens: 0, runs: 47, wickets: 3, econ: 11.75 },
            { name: "Kwena Maphaka", overs: 2.0, maidens: 0, runs: 22, wickets: 0, econ: 11.00 },
            { name: "Wanindu Hasaranga", overs: 4.0, maidens: 0, runs: 27, wickets: 1, econ: 6.75 },
            { name: "Riyan Parag", overs: 2.0, maidens: 0, runs: 28, wickets: 0, econ: 13.00 },
            { name: "Akash Madhwal", overs: 4.0, maidens: 0, runs: 29, wickets: 3, econ: 7.25 }
        ]
    },
    innings2: {
        teamName: 'Royals',
        batting: [
            { name: "Yashasvi Jaiswal", out: "c Anshul Kamboj", runs: 38, balls: 19, fours: 5, sixes: 2, sr: 169.47 },
            { name: "Vaibhav Suryavanshi", out: "c Ravichandran Ashwin", runs: 57, balls: 33, fours: 4, sixes: 4, sr: 172.73 },
            { name: "Sanju Samson (C) (Wk)", out: "c Ravichandran Ashwin", runs: 41, balls: 31, fours: 3, sixes: 2, sr: 132.26 },
            { name: "Riyan Parag", out: "c Noor Ahmad", runs: 3, balls: 4, fours: 0, sixes: 0, sr: 75.00 },
            { name: "Dhruv Jurel", out: "not out", runs: 31, balls: 12, fours: 2, sixes: 3, sr: 258.33 },
            { name: "Shimron Hetmyer", out: "not out", runs: 12, balls: 5, fours: 1, sixes: 1, sr: 240.00 }
        ],
        extras: { total: 8, details: "(NB 1, W 7)" },
        total: { score: "188", details: "(4 wkts, 17.1 ov)" },
        yetToBat: "Wanindu Hasaranga, Yudhvir Singh, Kwena Maphaka, Tushar Deshpande, Akash Madhwal",
        fow: "37/1 (Y. Jaiswal, 3.4 ov) · 138/2 (S. Samson, 13.2 ov) · 138/3 (V. Suryavanshi, 13.6 ov) · 158/4 (R. Parag, 15.4 ov)",
        bowling: [
            { name: "Khaleel Ahmed", overs: 3.0, maidens: 0, runs: 35, wickets: 0, econ: 11.67 },
            { name: "Anshul Kamboj", overs: 3.0, maidens: 0, runs: 21, wickets: 1, econ: 7.00 },
            { name: "Ravichandran Ashwin", overs: 4.0, maidens: 0, runs: 41, wickets: 2, econ: 10.25 },
            { name: "Noor Ahmad", overs: 3.0, maidens: 0, runs: 42, wickets: 1, econ: 14.00 },
            { name: "Matheesha Pathirana", overs: 2.1, maidens: 0, runs: 22, wickets: 0, econ: 10.16 },
            { name: "Ravindra Jadeja", overs: 2.0, maidens: 0, runs: 27, wickets: 0, econ: 13.50 }
        ]
    }
},
// Match 73 (index 72)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '180/5', overs: '20' },
    team2: { name: 'DC', logo: 'dc_logo.jpg', score: '121', overs: '18.2' },
    status: 'MI won by 59 runs',
    toss: "DC won the toss and decided to bowl",
    venue: "Wankhede Stadium",
    pom: "Suryakumar Yadav", // For his explosive 73 off 43 balls
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c Madhav Tiwari b Kuldeep Yadav", runs: 25, balls: 18, fours: 0, sixes: 2, sr: 138.89 },
            { name: "Rohit Sharma", out: "c Mustafizur Rahman", runs: 5, balls: 5, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Will Jacks", out: "c Vipraj Nigam b Mukesh Kumar", runs: 21, balls: 13, fours: 1, sixes: 1, sr: 161.54 },
            { name: "Suryakumar Yadav", out: "not out", runs: 73, balls: 43, fours: 7, sixes: 4, sr: 169.77 },
            { name: "Tilak Varma", out: "c Sameer Rizvi b Mukesh Kumar", runs: 27, balls: 27, fours: 1, sixes: 1, sr: 100.00 },
            { name: "Hardik Pandya (C)", out: "c Abishek Porel b Dushmantha Chameera", runs: 3, balls: 6, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Naman Dhir", out: "not out", runs: 24, balls: 8, fours: 2, sixes: 2, sr: 300.00 }
        ],
        extras: { total: 2, details: "(W 1, LB 1)" },
        total: { score: "180", details: "(5 wkts, 20 ov)" },
        yetToBat: "Mitchell Santner, Deepak Chahar, Trent Boult, Jasprit Bumrah, Karn Sharma (IP)",
        fow: "23/1 (R. Sharma, 2.2 ov) · 48/2 (W. Jacks, 5.3 ov) · 58/3 (R. Rickelton, 6.4 ov) · 113/4 (T. Varma, 14.5 ov) · 120/5 (H. Pandya, 16.3 ov)",
        bowling: [
            { name: "Mukesh Kumar", overs: 4.0, maidens: 0, runs: 48, wickets: 2, econ: 12.00 },
            { name: "Dushmantha Chameera", overs: 4.0, maidens: 0, runs: 54, wickets: 1, econ: 13.50 },
            { name: "Mustafizur Rahman", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 25, wickets: 0, econ: 6.25 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 22, wickets: 1, econ: 5.50 }
        ]
    },
    innings2: {
        teamName: 'Capitals',
        batting: [
            { name: "KL Rahul", out: "c Ryan Rickelton b Trent Boult", runs: 11, balls: 6, fours: 2, sixes: 0, sr: 183.33 },
            { name: "Faf du Plessis", out: "c Suryakumar Yadav b Deepak Chahar", runs: 6, balls: 7, fours: 1, sixes: 0, sr: 85.71 },
            { name: "Abishek Porel (Wk)", out: "c Will Jacks", runs: 6, balls: 9, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Sameer Rizvi", out: "c Tilak Varma b Mitchell Santner", runs: 39, balls: 35, fours: 6, sixes: 1, sr: 111.43 },
            { name: "Madhav Tiwari", out: "c & b Mitchell Santner", runs: 20, balls: 11, fours: 3, sixes: 1, sr: 181.82 },
            { name: "Tristan Stubbs", out: "c Naman Dhir b Jasprit Bumrah", runs: 2, balls: 4, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Ashutosh Sharma", out: "c Tilak Varma b Mitchell Santner", runs: 18, balls: 16, fours: 1, sixes: 1, sr: 112.50 },
            { name: "Mathew Tiwari", out: "not out", runs: 3, balls: 4, fours: 0, sixes: 0, sr: 75.00 },
            { name: "Dushmantha Chameera", out: "not out", runs: 8, balls: 10, fours: 0, sixes: 0, sr: 80.00 },
            { name: "Kuldeep Yadav", out: "not out", runs: 7, balls: 8, fours: 0, sixes: 0, sr: 87.50 },
            { name: "Mustafizur Rahman", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 1, details: "(NB 1)" },
        total: { score: "121", details: "(10 wkts, 18.2 ov)" },
        yetToBat: "Mukesh Kumar (IP)",
        fow: "12/1 (F. du Plessis, 1.4 ov) · 20/2 (KL Rahul, 2.4 ov) · 27/3 (A. Porel, 4.2 ov) · 55/4 (V. S. Tiwary, 7.3 ov) · 96/5 (S. Rizvi, 12.5 ov) · 105/6 (T. Stubbs, 14.5 ov) · 108/7 (M. Tiwari, 15.3 ov) · 120/8 (K. Yadav, 17.6 ov) · 121/9 (M. Rahman, 18.2 ov)",
        bowling: [
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 29, wickets: 1, econ: 7.25 },
            { name: "Deepak Chahar", overs: 3.0, maidens: 0, runs: 22, wickets: 1, econ: 7.33 },
            { name: "Will Jacks", overs: 1.0, maidens: 0, runs: 16, wickets: 1, econ: 16.00 },
            { name: "Mitchell Santner", overs: 4.0, maidens: 0, runs: 11, wickets: 3, econ: 2.75 },
            { name: "Jasprit Bumrah", overs: 3.2, maidens: 0, runs: 12, wickets: 3, econ: 3.82 },
            { name: "Karn Sharma (IP)", overs: 3.0, maidens: 0, runs: 31, wickets: 1, econ: 10.33 }
        ]
    }
},
// Match 74 (index 73)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '235/2', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '202/9', overs: '20' },
    status: 'LSG won by 33 runs',
    toss: "GT won the toss and decided to bowl",
    venue: "Narendra Modi Stadium",
    pom: "Mitchell Marsh", // For his blistering 117 off 64 balls
    innings1: {
        teamName: 'Super Giants',
        batting: [
            { name: "Aiden Markram", out: "c Shahrukh Khan b Sai Kishore", runs: 69, balls: 46, fours: 5, sixes: 2, sr: 150.00 },
            { name: "Mitchell Marsh", out: "c & b Arshad Khan", runs: 117, balls: 64, fours: 10, sixes: 8, sr: 182.81 },
            { name: "Nicholas Pooran", out: "c Rahul Tewatia b Arshad Khan", runs: 56, balls: 27, fours: 4, sixes: 5, sr: 207.41 },
            { name: "Rishabh Pant (C) (Wk)", out: "not out", runs: 16, balls: 6, fours: 0, sixes: 2, sr: 266.67 }
        ],
        extras: { total: 10, details: "(NB 1, W 8, B 1)" },
        total: { score: "235", details: "(2 wkts, 20 ov)" },
        yetToBat: "Shardul Thakur, Abdul Samad, Himmat Singh, Shahbaz Ahmed, Akaash Deep, Avesh Khan, Will O'Rourke, Akaash Singh (IP)",
        fow: "9/1 (A. Markram, 0.5 ov) · 212/2 (M. Marsh, 18.2 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 37, wickets: 0, econ: 9.25 },
            { name: "Arshad Khan", overs: 3.0, maidens: 0, runs: 36, wickets: 1, econ: 12.00 },
            { name: "Kagiso Rabada", overs: 4.0, maidens: 0, runs: 45, wickets: 1, econ: 11.25 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 44, wickets: 0, econ: 11.00 },
            { name: "Sai Kishore", overs: 3.0, maidens: 0, runs: 34, wickets: 1, econ: 11.33 },
            { name: "Rashid Khan", overs: 2.0, maidens: 0, runs: 36, wickets: 0, econ: 18.00 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "c Akaash Madhwal b Will O'Rourke", runs: 21, balls: 16, fours: 4, sixes: 0, sr: 131.25 },
            { name: "Shubman Gill (C)", out: "c Ayush Badoni b Avesh Khan", runs: 35, balls: 20, fours: 7, sixes: 0, sr: 175.00 },
            { name: "Joe Butler (Wk)", out: "c Nicholas Pooran b Avesh Khan", runs: 33, balls: 18, fours: 3, sixes: 2, sr: 183.33 },
            { name: "Sherfane Rutherford", out: "c Sub b Will O'Rourke", runs: 38, balls: 22, fours: 1, sixes: 3, sr: 172.73 },
            { name: "Shahrukh Khan", out: "not out", runs: 57, balls: 29, fours: 5, sixes: 3, sr: 196.55 },
            { name: "Rahul Tewatia", out: "c Nicholas Pooran b Will O'Rourke", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Arshad Khan", out: "c Will O'Rourke b Shahbaz Ahmed", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Rashid Khan", out: "not out", runs: 4, balls: 4, fours: 0, sixes: 0, sr: 100.00 },
            { name: "Sai Kishore", out: "c Ayush Badoni", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 }
        ],
        extras: { total: 8, details: "(W 7, LB 1)" },
        total: { score: "202", details: "(9 wkts, 20 ov)" },
        yetToBat: "Mohammed Siraj, Prasidh Krishna (IP)",
        fow: "46/1 (S. Sudharsan, 4.3 ov) · 85/2 (S. Gill, 7.6 ov) · 96/3 (J. Butler, 9.3 ov) · 162/4 (S. Rutherford, 14.5 ov) · 197/5 (R. Parag, 18.5 ov) · 197/6 (R. Tewatia, 18.6 ov) · 197/7 (S. Khan, 19.3 ov) · 200/8 (R. Khan, 19.3 ov) · 202/9 (S. Kishore, 19.6 ov)",
        bowling: [
            { name: "Akaash Singh (IP)", overs: 3.1, maidens: 0, runs: 29, wickets: 1, econ: 9.16 },
            { name: "Akaash Deep", overs: 4.0, maidens: 0, runs: 49, wickets: 0, econ: 12.25 },
            { name: "Will O'Rourke", overs: 4.0, maidens: 0, runs: 27, wickets: 3, econ: 6.75 },
            { name: "Avesh Khan", overs: 3.5, maidens: 0, runs: 51, wickets: 2, econ: 13.30 },
            { name: "Shahbaz Ahmed", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Ayush Badoni", overs: 1.0, maidens: 0, runs: 4, wickets: 2, econ: 4.00 }
        ]
    }
},
// Match 75 (index 74)
{
    team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '231/6', overs: '20' },
    team2: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '189', overs: '19.5' },
    status: 'SRH won by 42 runs',
    toss: "RCB won the toss and decided to bowl",
    venue: "Ekana Cricket Stadium B Ground",
    pom: "Ishan Kishan", // For his explosive 94 off 48 balls
    innings1: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Abhishek Sharma", out: "c Phil Salt b Lungi Ngidi", runs: 38, balls: 17, fours: 5, sixes: 2, sr: 223.53 },
            { name: "Travis Head", out: "c Romario Shepherd b Bhuvneshwar Kumar", runs: 17, balls: 10, fours: 3, sixes: 0, sr: 170.00 },
            { name: "Ishan Kishan (Wk)", out: "not out", runs: 94, balls: 48, fours: 7, sixes: 5, sr: 195.83 },
            { name: "Heinrich Klaasen", out: "c Phil Salt b Suyash Sharma", runs: 24, balls: 13, fours: 2, sixes: 2, sr: 184.62 },
            { name: "Aniket Verma", out: "c Bhuvneshwar Kumar b Krunal Pandya", runs: 26, balls: 9, fours: 1, sixes: 3, sr: 288.89 },
            { name: "Harshal Patel", out: "c Lungi Ngidi b Krunal Pandya", runs: 4, balls: 7, fours: 0, sixes: 0, sr: 57.14 },
            { name: "Abhinav Manohar", out: "c Suyash Sharma b Romario Shepherd", runs: 12, balls: 11, fours: 0, sixes: 1, sr: 109.09 },
            { name: "Pat Cummins (C)", out: "not out", runs: 13, balls: 6, fours: 0, sixes: 1, sr: 216.67 }
        ],
        extras: { total: 7, details: "(NB 1, W 2, LB 4)" },
        total: { score: "231", details: "(6 wkts, 20 ov)" },
        yetToBat: "Harshal Patel, Jaydev Unadkat, Eshan Malinga, Marsh Dubey",
        fow: "54/1 (A. Sharma, 3.8 ov) · 54/2 (T. Head, 4.2 ov) · 102/3 (H. Klaasen, 5.5 ov) · 145/4 (A. Verma, 11.4 ov) · 189/5 (H. K. Reddy, 14.2 ov) · 189/6 (A. Manohar, 16.6 ov)",
        bowling: [
            { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 36, wickets: 0, econ: 12.00 },
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 43, wickets: 1, econ: 10.75 },
            { name: "Lungi Ngidi", overs: 4.0, maidens: 0, runs: 51, wickets: 1, econ: 12.75 },
            { name: "Suyash Sharma", overs: 3.0, maidens: 0, runs: 45, wickets: 1, econ: 15.00 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 38, wickets: 1, econ: 9.50 },
            { name: "Romario Shepherd", overs: 2.0, maidens: 0, runs: 14, wickets: 2, econ: 7.00 }
        ]
    },
    innings2: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c Harshal Patel b Pat Cummins", runs: 82, balls: 52, fours: 8, sixes: 5, sr: 157.69 },
            { name: "Virat Kohli", out: "c Abhinav Manohar b Harish Dubey", runs: 43, balls: 25, fours: 7, sixes: 1, sr: 172.00 },
            { name: "Mayank Agarwal", out: "c Aniket Verma b Nitish Kumar Reddy", runs: 11, balls: 10, fours: 1, sixes: 0, sr: 110.00 },
            { name: "Rajat Patidar", out: "c & b Pat Cummins", runs: 18, balls: 16, fours: 1, sixes: 0, sr: 112.50 },
            { name: "Shashank Singh", out: "c & b Jaydev Unadkat", runs: 24, balls: 15, fours: 1, sixes: 2, sr: 160.00 },
            { name: "Romario Shepherd", out: "c & b Eshan Malinga", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Krunal Pandya", out: "not out", runs: 8, balls: 6, fours: 2, sixes: 0, sr: 133.33 },
            { name: "Tim David", out: "c Heinrich Klaasen b Eshan Malinga", runs: 1, balls: 5, fours: 0, sixes: 0, sr: 20.00 },
            { name: "Bhuvneshwar Kumar", out: "c L.Pat Cummins", runs: 3, balls: 2, fours: 0, sixes: 0, sr: 150.00 },
            { name: "Yash Dayal", out: "c Aniket Verma b Harshal Patel", runs: 3, balls: 6, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Lungi Ngidi", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 16, details: "(NB 1, W 4, LB 11)" },
        total: { score: "189", details: "(10 wkts, 19.5 ov)" },
        yetToBat: "Suyash Sharma",
        fow: "80/1 (V. Kohli, 6.8 ov) · 120/2 (M. Agarwal, 10.4 ov) · 129/3 (P. Salt, 11.2 ov) · 173/4 (R. Patidar, 16.4 ov) · 174/5 (R. Shepherd, 17.1 ov) · 174/6 (S. Singh, 17.2 ov) · 187/7 (T. David, 17.4 ov) · 188/8 (B. Kumar, 18.1 ov) · 187/9 (K. Pandya, 18.4 ov) · 189/10 (Y. Dayal, 19.5 ov)",
        bowling: [
            { name: "Pat Cummins (C)", overs: 4.0, maidens: 0, runs: 28, wickets: 3, econ: 7.00 },
            { name: "Jaydev Unadkat", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Harshal Patel", overs: 3.5, maidens: 0, runs: 39, wickets: 1, econ: 10.17 },
            { name: "Eshan Malinga", overs: 4.0, maidens: 0, runs: 37, wickets: 2, econ: 9.25 },
            { name: "Harish Dubey", overs: 2.0, maidens: 0, runs: 20, wickets: 1, econ: 10.00 },
            { name: "Nitish Kumar Reddy", overs: 2.0, maidens: 0, runs: 13, wickets: 1, econ: 6.50 }
        ]
    }
},
// Match 76 (index 75)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '208/8', overs: '20' },
    team2: { name: 'DC', logo: 'dc_logo.jpg', score: '208/4', overs: '19.3' },
    status: 'DC won by 6 wickets (3 balls left)',
    toss: "DC won the toss and decided to bowl",
    venue: "Sawai Mansingh Stadium",
    pom: "Shreyas Iyer", // For his match-winning 53
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyamsh Arya", out: "b Mukesh Kumar", runs: 6, balls: 9, fours: 1, sixes: 0, sr: 66.67 },
            { name: "Prabhsimran Singh", out: "c Tristan Stubbs b Mustafizur Rahman", runs: 28, balls: 18, fours: 4, sixes: 1, sr: 155.56 },
            { name: "Josh Inglis (Wk)", out: "c Tristan Stubbs b Vipraj Nigam", runs: 32, balls: 12, fours: 3, sixes: 2, sr: 266.67 },
            { name: "Shreyas Iyer (C)", out: "c Phil Salt b Kuldeep Yadav", runs: 53, balls: 34, fours: 5, sixes: 2, sr: 155.88 },
            { name: "Nahal Wadhera", out: "c Faf du Plessis b Mukesh Kumar", runs: 16, balls: 16, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Shashank Singh", out: "c Tristan Stubbs b Mukesh Kumar", runs: 11, balls: 10, fours: 0, sixes: 0, sr: 110.00 },
            { name: "Marcus Stoinis", out: "not out", runs: 44, balls: 16, fours: 3, sixes: 4, sr: 275.00 },
            { name: "Azmatullah Omarzai", out: "c Kuldeep Yadav", runs: 1, balls: 3, fours: 0, sixes: 0, sr: 33.33 },
            { name: "Marco Jansen", out: "c Tristan Stubbs b Mustafizur Rahman", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Harpreet Brar", out: "not out", runs: 7, balls: 2, fours: 0, sixes: 1, sr: 350.00 }
        ],
        extras: { total: 8, details: "(NB 2, W 6)" },
        total: { score: "208", details: "(8 wkts, 20 ov)" },
        yetToBat: "Arshdeep Singh, Praveen Dubey",
        fow: "12/1 (P. Arya, 1.5 ov) · 55/2 (J. Inglis, 5.2 ov) · 77/3 (P. Singh, 7.5 ov) · 118/4 (N. Wadhera, 12.3 ov) · 144/5 (S. Singh, 15.4 ov) · 172/6 (S. Iyer, 17.2 ov) · 174/7 (A. Omarzai, 17.6 ov) · 197/8 (M. Jansen, 19.3 ov)",
        bowling: [
            { name: "Mukesh Kumar", overs: 4.0, maidens: 0, runs: 49, wickets: 1, econ: 12.25 },
            { name: "Mustafizur Rahman", overs: 4.0, maidens: 0, runs: 33, wickets: 3, econ: 8.25 },
            { name: "Mohit Sharma", overs: 4.0, maidens: 0, runs: 47, wickets: 0, econ: 11.75 },
            { name: "Vipraj Nigam", overs: 4.0, maidens: 0, runs: 38, wickets: 2, econ: 9.50 },
            { name: "Kuldeep Yadav", overs: 4.0, maidens: 0, runs: 39, wickets: 2, econ: 9.75 }
        ]
    },
    innings2: {
        teamName: 'Capitals',
        batting: [
            { name: "KL Rahul", out: "c Shashank Singh b Marco Jansen", runs: 35, balls: 21, fours: 6, sixes: 1, sr: 166.67 },
            { name: "Faf du Plessis", out: "c Priyamsh Arya b Harpreet Brar", runs: 23, balls: 15, fours: 2, sixes: 1, sr: 153.33 },
            { name: "Karun Nair", out: "c Harpreet Brar", runs: 44, balls: 27, fours: 5, sixes: 2, sr: 162.96 },
            { name: "Sediqullah Atal", out: "c Harpreet Brar b Praveen Dubey", runs: 22, balls: 16, fours: 0, sixes: 2, sr: 137.50 },
            { name: "Sameer Rizvi", out: "not out", runs: 58, balls: 25, fours: 3, sixes: 5, sr: 232.00 },
            { name: "Tristan Stubbs (Wk)", out: "not out", runs: 18, balls: 14, fours: 2, sixes: 0, sr: 128.57 }
        ],
        extras: { total: 8, details: "(NB 1, W 3, LB 4)" },
        total: { score: "208", details: "(4 wkts, 19.3 ov)" },
        yetToBat: "Azmatullah Sharma, Vipraj Nigam, Kuldeep Yadav, Mohit Sharma, Mustafizur Rahman",
        fow: "53/1 (KL Rahul, 5.3 ov) · 85/2 (F. du Plessis, 8.4 ov) · 92/3 (S. Atal, 10.1 ov) · 158/4 (K. Nair, 14.4 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 35, wickets: 0, econ: 8.75 },
            { name: "Azmatullah Omarzai", overs: 4.0, maidens: 0, runs: 46, wickets: 0, econ: 11.50 },
            { name: "Harpreet Brar", overs: 4.0, maidens: 0, runs: 41, wickets: 2, econ: 10.25 },
            { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 41, wickets: 1, econ: 10.25 },
            { name: "Praveen Dubey", overs: 2.0, maidens: 0, runs: 20, wickets: 1, econ: 10.00 },
            { name: "Marcus Stoinis", overs: 1.3, maidens: 0, runs: 21, wickets: 0, econ: 14.00 }
        ]
    }
},

// Match 77 (index 76)
{
    team1: { name: 'CSK', logo: 'Logos/Logos/csk_logo.jpg', score: '230/5', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '147', overs: '18.3' },
    status: 'CSK won by 83 runs',
    toss: "CSK won the toss and decided to bat",
    venue: "Narendra Modi Stadium",
    pom: "Shivam Dube", // For his explosive fifty and key wickets
    innings1: {
        teamName: 'Super Kings',
        batting: [
            { name: "Ayush Mishra", out: "c Mohammed Siraj b Prasidh Krishna", runs: 34, balls: 17, fours: 5, sixes: 2, sr: 200.00 },
            { name: "Devon Conway", out: "c Mohammed Siraj b Prasidh Krishna", runs: 52, balls: 35, fours: 6, sixes: 2, sr: 148.57 },
            { name: "Luvit Patel", out: "c Shubman Gill b Sai Kishore", runs: 37, balls: 19, fours: 4, sixes: 2, sr: 194.74 },
            { name: "Shivam Dube", out: "c Gerald Coetzee b Shahrukh Khan", runs: 17, balls: 8, fours: 0, sixes: 2, sr: 212.50 },
            { name: "Ravindra Jadeja", out: "c Joe Butler b Shahrukh Khan", runs: 57, balls: 23, fours: 4, sixes: 5, sr: 247.83 },
            { name: "Ravindra Jadeja", out: "not out", runs: 21, balls: 18, fours: 1, sixes: 1, sr: 116.67 }
        ],
        extras: { total: 12, details: "(W 5, LB 7)" },
        total: { score: "230", details: "(5 wkts, 20 ov)" },
        yetToBat: "MS Dhoni (C)(Wk), Deepak Hooda, Noor Ahmad, Arshul Kamboj, Khaleel Ahmed, Matheesha Pathirana (IP)",
        fow: "41/1 (A. Mishra, 3.4 ov) · 107/2 (L. Patel, 9.2 ov) · 144/3 (S. Dube, 12.3 ov) · 198/4 (D. Conway, 13.3 ov) · 230/5 (R. Jadeja, 19.6 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 47, wickets: 0, econ: 11.75 },
            { name: "Arshad Khan", overs: 2.0, maidens: 0, runs: 42, wickets: 0, econ: 21.00 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 22, wickets: 2, econ: 5.50 },
            { name: "Gerald Coetzee", overs: 3.0, maidens: 0, runs: 34, wickets: 0, econ: 11.33 },
            { name: "Sai Kishore", overs: 2.0, maidens: 0, runs: 23, wickets: 1, econ: 11.50 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 42, wickets: 1, econ: 10.50 },
            { name: "Shahrukh Khan", overs: 1.0, maidens: 0, runs: 13, wickets: 1, econ: 13.00 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan (IP)", out: "c Shivam Dube b Ravindra Jadeja", runs: 41, balls: 28, fours: 6, sixes: 0, sr: 146.43 },
            { name: "Shubman Gill (C)", out: "c Ravindra Jadeja", runs: 13, balls: 9, fours: 1, sixes: 1, sr: 144.44 },
            { name: "Joe Butler (Wk)", out: "c Arshul Kamboj b Khaleel Ahmed", runs: 5, balls: 7, fours: 0, sixes: 0, sr: 71.43 },
            { name: "Sherfane Rutherford", out: "c Ayush Badoni b Arshul Kamboj", runs: 0, balls: 4, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Shahrukh Khan", out: "c Shivam Dube b Ravindra Jadeja", runs: 19, balls: 15, fours: 0, sixes: 2, sr: 126.67 },
            { name: "Rahul Tewatia", out: "c Matheesha Pathirana b Ravindra Jadeja", runs: 14, balls: 10, fours: 1, sixes: 0, sr: 140.00 },
            { name: "Rashid Khan", out: "c Shivam Dube b Noor Ahmad", runs: 12, balls: 5, fours: 1, sixes: 1, sr: 100.00 },
            { name: "Gerald Coetzee", out: "c Matheesha Pathirana", runs: 5, balls: 5, fours: 1, sixes: 0, sr: 100.00 },
            { name: "Arshad Khan", out: "c Matheesha Pathirana b Noor Ahmad", runs: 20, balls: 14, fours: 0, sixes: 3, sr: 142.86 },
            { name: "Sai Kishore", out: "c Matheesha Pathirana b Arshul Kamboj", runs: 3, balls: 7, fours: 0, sixes: 0, sr: 42.86 },
            { name: "Mohammed Siraj", out: "not out", runs: 3, balls: 4, fours: 0, sixes: 0, sr: 75.00 }
        ],
        extras: { total: 12, details: "(W 10, LB 2)" },
        total: { score: "147", details: "(10 wkts, 18.3 ov)" },
        yetToBat: "Prasidh Krishna (IP)",
        fow: "24/1 (S. Gill, 2.3 ov) · 29/2 (J. Butler, 3.4 ov) · 30/3 (S. Rutherford, 4.3 ov) · 85/4 (S. Sudharsan, 10.2 ov) · 88/5 (S. Khan, 10.4 ov) · 126/6 (R. Tewatia, 13.4 ov) · 126/7 (R. Khan, 15.3 ov) · 142/8 (A. Khan, 17.3 ov) · 147/9 (G. Coetzee, 17.6 ov) · 147/10 (S. Kishore, 18.3 ov)",
        bowling: [
            { name: "Ravindra Jadeja", overs: 3.0, maidens: 0, runs: 17, wickets: 2, econ: 5.67 },
            { name: "Khaleel Ahmed", overs: 3.0, maidens: 0, runs: 17, wickets: 1, econ: 5.67 },
            { name: "Arshul Kamboj", overs: 2.3, maidens: 0, runs: 13, wickets: 3, econ: 5.20 },
            { name: "Shivam Dube", overs: 2.0, maidens: 0, runs: 33, wickets: 0, econ: 16.50 },
            { name: "Noor Ahmad", overs: 4.0, maidens: 0, runs: 21, wickets: 3, econ: 5.25 },
            { name: "Matheesha Pathirana (IP)", overs: 3.0, maidens: 0, runs: 29, wickets: 1, econ: 9.67 },
            { name: "Deepak Hooda", overs: 1.0, maidens: 0, runs: 15, wickets: 0, econ: 15.00 }
        ]
    }
},


// Match 78 (index 77)
{
    team1: { name: 'SRH', logo: 'Logos/srh_logo.jpg', score: '278/3', overs: '20' },
    team2: { name: 'KKR', logo: 'Logos/kkr_logo.png', score: '168', overs: '16.4' },
    status: 'SRH won by 110 runs',
    toss: "SRH won the toss and decided to bat",
    venue: "Arun Jaitley",
    pom: "Heinrich Klaasen", // For his blistering century
    innings1: {
        teamName: 'Sunrisers',
        batting: [
            { name: "Abhishek Sharma", out: "c Rinku Singh b Sunil Narine", runs: 32, balls: 16, fours: 4, sixes: 2, sr: 200.00 },
            { name: "Travis Head", out: "c Andre Russell b Sunil Narine", runs: 76, balls: 40, fours: 6, sixes: 6, sr: 190.00 },
            { name: "Heinrich Klaasen", out: "not out", runs: 105, balls: 39, fours: 7, sixes: 9, sr: 269.23 },
            { name: "Ishan Kishan (Wk)", out: "c Vaibhav Arora b Vaibhav Arora", runs: 29, balls: 20, fours: 4, sixes: 1, sr: 145.00 },
            { name: "Aniket Verma", out: "not out", runs: 12, balls: 6, fours: 1, sixes: 1, sr: 200.00 }
        ],
        extras: { total: 24, details: "(NB 1, W 14, B 2, LB 7)" },
        total: { score: "278", details: "(3 wkts, 20 ov)" },
        yetToBat: "Nitish Kumar Reddy, Abhinav Manohar, Pat Cummins (C), Harshal Patel, Jaydev Unadkat, Eshan Malinga, Harish Dubey",
        fow: "52/1 (A. Sharma, 5.3 ov) · 175/2 (T. Head, 12.4 ov) · 258/3 (I. Kishan, 18.3 ov)",
        bowling: [
            { name: "Vaibhav Arora", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 },
            { name: "Anrich Nortje", overs: 4.0, maidens: 0, runs: 60, wickets: 0, econ: 15.00 },
            { name: "Harshit Rana", overs: 3.0, maidens: 0, runs: 40, wickets: 0, econ: 13.33 },
            { name: "Sunil Narine", overs: 4.0, maidens: 0, runs: 42, wickets: 2, econ: 10.50 },
            { name: "Varun Chakravarthy", overs: 3.0, maidens: 0, runs: 54, wickets: 0, econ: 18.00 },
            { name: "Andre Russell", overs: 2.0, maidens: 0, runs: 34, wickets: 0, econ: 17.00 }
        ]
    },
    innings2: {
        teamName: 'Knight Riders',
        batting: [
            { name: "Quinton de Kock (Wk)", out: "c Abhinav Manohar b Eshan Malinga", runs: 9, balls: 13, fours: 0, sixes: 0, sr: 69.23 },
            { name: "Sunil Narine", out: "c Jaydev Unadkat", runs: 31, balls: 16, fours: 3, sixes: 3, sr: 193.75 },
            { name: "Ajinkya Rahane (C)", out: "c Harshal Patel b Jaydev Unadkat", runs: 15, balls: 8, fours: 3, sixes: 0, sr: 187.50 },
            { name: "Angkrish Raghuvanshi", out: "c Eshan Malinga b Eshan Malinga", runs: 14, balls: 18, fours: 1, sixes: 0, sr: 77.78 },
            { name: "Rinku Singh", out: "c Nitish Kumar Reddy b Harish Dubey", runs: 9, balls: 6, fours: 0, sixes: 1, sr: 150.00 },
            { name: "Venkatesh Iyer", out: "c & b Harish Dubey", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Manish Pandey", out: "c Harshal Patel b Jaydev Unadkat", runs: 37, balls: 23, fours: 2, sixes: 3, sr: 160.87 },
            { name: "Ramandeep Singh", out: "not out", runs: 13, balls: 5, fours: 0, sixes: 2, sr: 260.00 },
            { name: "Harshit Rana", out: "c & b Eshan Malinga", runs: 34, balls: 21, fours: 2, sixes: 3, sr: 161.90 },
            { name: "Varun Chakravarthy", out: "c Jaydev Unadkat", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Anrich Nortje", out: "not out", runs: 0, balls: 0, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 6, details: "(W 4, B 1, LB 1)" },
        total: { score: "168", details: "(10 wkts, 16.4 ov)" },
        yetToBat: "Varun Chakravarthy",
        fow: "37/1 (S. Narine, 3.3 ov) · 55/2 (A. Rahane, 5.3 ov) · 61/3 (Q. de Kock, 6.3 ov) · 70/4 (R. Singh, 8.4 ov) · 130/5 (A. Raghuvanshi, 11.5 ov) · 131/6 (V. Iyer, 11.6 ov) · 162/7 (M. Pandey, 13.5 ov) · 162/8 (M. Pandey, 17.3 ov) · 162/9 (V. Arora, 17.4 ov) · 168/10 (H. Rana, 18.4 ov)",
        bowling: [
            { name: "Pat Cummins (C)", overs: 2.0, maidens: 0, runs: 25, wickets: 0, econ: 12.50 },
            { name: "Jaydev Unadkat", overs: 4.0, maidens: 0, runs: 34, wickets: 3, econ: 8.50 },
            { name: "Harshal Patel", overs: 2.0, maidens: 0, runs: 21, wickets: 0, econ: 10.50 },
            { name: "Eshan Malinga", overs: 3.4, maidens: 0, runs: 31, wickets: 3, econ: 8.45 },
            { name: "Harish Dubey", overs: 4.0, maidens: 0, runs: 34, wickets: 3, econ: 8.50 },
            { name: "Nitish Kumar Reddy", overs: 1.0, maidens: 0, runs: 6, wickets: 0, econ: 6.00 },
            { name: "Abhishek Sharma", overs: 2.0, maidens: 0, runs: 25, wickets: 0, econ: 12.50 }
        ]
    }
},
// Match 79 (index 78)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '184/7', overs: '20' },
    team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '187/3', overs: '18.3' },
    status: 'PBKS won by 7 wickets (9 balls left)',
    toss: "PBKS won the toss and decided to bowl",
    venue: "Sawai Mansingh Stadium",
    pom: "Josh Inglis", // For his match-winning knock
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Ryan Rickelton (Wk)", out: "c Shreyas Iyer b Marco Jansen", runs: 27, balls: 25, fours: 5, sixes: 0, sr: 108.00 },
            { name: "Rohit Sharma", out: "c & b Harpreet Brar", runs: 24, balls: 21, fours: 2, sixes: 1, sr: 114.29 },
            { name: "Suryakumar Yadav", out: "c Arshdeep Singh b Arshdeep Singh", runs: 57, balls: 39, fours: 6, sixes: 2, sr: 146.15 },
            { name: "Tilak Varma", out: "not out", runs: 1, balls: 4, fours: 0, sixes: 0, sr: 25.00 },
            { name: "Will Jacks", out: "c Arshdeep Singh b Vyshak Vijay Kumar", runs: 17, balls: 8, fours: 1, sixes: 2, sr: 212.50 },
            { name: "Hardik Pandya (C)", out: "c Marco Jansen b Vyshak Vijay Kumar", runs: 28, balls: 15, fours: 2, sixes: 2, sr: 173.33 },
            { name: "Naman Dhir", out: "c & b Arshdeep Singh", runs: 20, balls: 12, fours: 0, sixes: 2, sr: 166.67 },
            { name: "Mitchell Santner", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 11, details: "(W 11)" },
        total: { score: "184", details: "(7 wkts, 20 ov)" },
        yetToBat: "Deepak Chahar, Trent Boult, Jasprit Bumrah, Ashwani Kumar (IP)",
        fow: "41/1 (R. Rickelton, 5.1 ov) · 81/2 (R. Sharma, 9.3 ov) · 87/3 (T. Varma, 10.5 ov) · 106/4 (W. Jacks, 12.3 ov) · 150/5 (H. Pandya, 16.2 ov) · 181/6 (N. Dhir, 19.1 ov) · 184/7 (S. Yadav, 19.6 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 28, wickets: 2, econ: 7.00 },
            { name: "Kyle Jamieson", overs: 4.0, maidens: 0, runs: 42, wickets: 0, econ: 10.50 },
            { name: "Marco Jansen", overs: 4.0, maidens: 0, runs: 34, wickets: 2, econ: 8.50 },
            { name: "Harpreet Brar", overs: 4.0, maidens: 0, runs: 36, wickets: 1, econ: 9.00 },
            { name: "Vyshak Vijay Kumar", overs: 4.0, maidens: 0, runs: 44, wickets: 2, econ: 11.00 }
        ]
    },
    innings2: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "not out", runs: 82, balls: 46, fours: 9, sixes: 2, sr: 177.14 },
            { name: "Prabhsimran Singh (IP)", out: "c Suryakumar Yadav b Mitchell Santner", runs: 13, balls: 16, fours: 1, sixes: 1, sr: 81.25 },
            { name: "Josh Inglis (Wk)", out: "c & b Jasprit Bumrah", runs: 73, balls: 42, fours: 9, sixes: 3, sr: 173.81 },
            { name: "Shreyas Iyer (C)", out: "c Jasprit Bumrah b Hardik Pandya", runs: 26, balls: 16, fours: 1, sixes: 2, sr: 162.50 },
            { name: "Nahal Wadhera", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 11, details: "(W 8, B 1, LB 2)" },
        total: { score: "187", details: "(3 wkts, 18.3 ov)" },
        yetToBat: "Arshdeep Singh, Marcus Stoinis, Marco Jansen, Harpreet Brar, Kyle Jamieson, Arshdeep Singh, Vyshak Vijay Kumar (IP)",
        fow: "34/1 (P. Singh, 4.2 ov) · 143/2 (P. Arya, 14.1 ov) · 171/3 (J. Inglis, 17.3 ov)",
        bowling: [
            { name: "Trent Boult", overs: 3.3, maidens: 0, runs: 38, wickets: 0, econ: 10.29 },
            { name: "Deepak Chahar", overs: 3.0, maidens: 0, runs: 28, wickets: 0, econ: 9.33 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 23, wickets: 1, econ: 5.75 },
            { name: "Mitchell Santner", overs: 4.0, maidens: 0, runs: 41, wickets: 2, econ: 10.25 },
            { name: "Hardik Pandya (C)", overs: 2.0, maidens: 0, runs: 29, wickets: 0, econ: 14.50 },
            { name: "Ashwani Kumar (IP)", overs: 1.0, maidens: 0, runs: 16, wickets: 0, econ: 16.00 },
            { name: "Will Jacks", overs: 1.0, maidens: 0, runs: 11, wickets: 0, econ: 11.00 }
        ]
    }
},
// Match 80 (index 79)
{
    team1: { name: 'LSG', logo: 'Logos/lsg_logo.jpg', score: '227/3', overs: '20' },
    team2: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '230/4', overs: '18.4' },
    status: 'RCB won by 6 wickets (8 balls left)',
    toss: "RCB won the toss and decided to bowl",
    venue: "Ekana Cricket Stadium B Ground",
    pom: "Jitesh Sharma",
    innings1: {
        teamName: 'Super Giants',
        batting: [
            { name: "Mitchell Marsh", out: "c Lokesh Sharma b Bhuvneshwar Kumar", runs: 87, balls: 37, fours: 4, sixes: 5, sr: 181.08 },
            { name: "Matthew Breetzke", out: "not out", runs: 14, balls: 12, fours: 1, sixes: 1, sr: 116.67 },
            { name: "Rishabh Pant (C)(Wk)", out: "c Lokesh Sharma b Bhuvneshwar Kumar", runs: 118, balls: 61, fours: 11, sixes: 8, sr: 193.44 },
            { name: "Nicholas Pooran", out: "c Yash Dayal b Romario Shepherd", runs: 13, balls: 10, fours: 1, sixes: 0, sr: 130.00 },
            { name: "Abdul Samad", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 14, details: "(NB 1, W 5, LB 8)" },
        total: { score: "227", details: "(3 wkts, 20 ov)" },
        yetToBat: "Ayush Badoni, Himmat Singh, Shahbaz Ahmed, Digvesh Rathi, Avesh Khan, Will O'Rourke, Akash Singh",
        fow: "21/1 (M. Breetzke, 2.4 ov) · 177/2 (M. Marsh, 15.3 ov) · 226/3 (N. Pooran, 19.5 ov)",
        bowling: [
            { name: "Nuwan Thushara", overs: 4.0, maidens: 0, runs: 28, wickets: 1, econ: 6.50 },
            { name: "Krunal Pandya", overs: 2.0, maidens: 0, runs: 14, wickets: 0, econ: 7.00 },
            { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 44, wickets: 0, econ: 14.67 },
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 46, wickets: 1, econ: 11.50 },
            { name: "Suyash Sharma", overs: 3.0, maidens: 0, runs: 39, wickets: 0, econ: 13.00 },
            { name: "Romario Shepherd", overs: 4.0, maidens: 0, runs: 51, wickets: 1, econ: 12.75 }
        ]
    },
    innings2: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c Digvesh Rathi b Akash Singh", runs: 30, balls: 19, fours: 6, sixes: 0, sr: 157.89 },
            { name: "Virat Kohli", out: "c Ayush Badoni b Avesh Khan", runs: 54, balls: 30, fours: 10, sixes: 0, sr: 180.00 },
            { name: "Rajat Patidar", out: "c Abdul Samad b Will O'Rourke", runs: 14, balls: 7, fours: 1, sixes: 1, sr: 200.00 },
            { name: "Liam Livingstone", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Mayank Agarwal", out: "not out", runs: 41, balls: 23, fours: 5, sixes: 0, sr: 178.26 },
            { name: "Jitesh Sharma (Wk)", out: "not out", runs: 85, balls: 33, fours: 8, sixes: 6, sr: 257.58 }
        ],
        extras: { total: 6, details: "(NB 1, W 5)" },
        total: { score: "230", details: "(4 wkts, 18.4 ov)" },
        yetToBat: "Romario Shepherd, Krunal Pandya, Bhuvneshwar Kumar, Yash Dayal, Nuwan Thushara, Suyash Sharma",
        fow: "61/1 (P. Salt, 5.4 ov) · 95/2 (R. Patidar, 7.5 ov) · 98/3 (L. Livingstone, 7.6 ov) · 123/4 (V. Kohli, 10.3 ov)",
        bowling: [
            { name: "Akash Singh", overs: 4.0, maidens: 0, runs: 40, wickets: 1, econ: 10.00 },
            { name: "Will O'Rourke", overs: 4.0, maidens: 0, runs: 74, wickets: 2, econ: 18.50 },
            { name: "Digvesh Rathi", overs: 4.0, maidens: 0, runs: 36, wickets: 0, econ: 9.00 },
            { name: "Shahbaz Ahmed", overs: 3.0, maidens: 0, runs: 39, wickets: 0, econ: 13.00 },
            { name: "Avesh Khan", overs: 3.0, maidens: 0, runs: 32, wickets: 1, econ: 10.67 },
            { name: "Ayush Badoni", overs: 0.4, maidens: 0, runs: 9, wickets: 0, econ: 13.50 }
        ]
    }
},
// Match 81 (index 80)
{
    team1: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '101', overs: '14.1' },
    team2: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '106/2', overs: '10' },
    status: 'RCB won by 8 wickets (60 balls left)',
    toss: "RCB won the toss and decided to bowl",
    venue: "PCA New Cricket Stadium",
    pom: "Josh Hazlewood", // For his excellent bowling figures
    innings1: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "c Jitesh Sharma b Yash Dayal", runs: 7, balls: 5, fours: 1, sixes: 0, sr: 140.00 },
            { name: "Prabhsimran Singh", out: "c Jitesh Sharma b Bhuvneshwar Kumar", runs: 18, balls: 10, fours: 2, sixes: 1, sr: 180.00 },
            { name: "Josh Inglis (Wk)", out: "c Suyash Sharma b Josh Hazlewood", runs: 4, balls: 7, fours: 0, sixes: 0, sr: 57.14 },
            { name: "Shreyas Iyer (C)", out: "c Jitesh Sharma b Josh Hazlewood", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Nahal Wadhera", out: "not out", runs: 8, balls: 10, fours: 1, sixes: 0, sr: 80.00 },
            { name: "Marcus Stoinis", out: "not out", runs: 26, balls: 17, fours: 2, sixes: 2, sr: 152.94 },
            { name: "Shashank Singh", out: "c Jitesh Sharma b Suyash Sharma", runs: 3, balls: 5, fours: 0, sixes: 0, sr: 60.00 },
            { name: "Musheer Khan (IP)", out: "not out", runs: 0, balls: 3, fours: 0, sixes: 0, sr: 0.00 },
            { name: "Azmatullah Omarzai", out: "c Jitesh Sharma b Josh Hazlewood", runs: 18, balls: 12, fours: 1, sixes: 1, sr: 150.00 },
            { name: "Romario Shepherd", out: "not out", runs: 4, balls: 11, fours: 0, sixes: 0, sr: 36.36 },
            { name: "Kyle Jamieson", out: "not out", runs: 0, balls: 3, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 11, details: "(NB 1, W 5, LB 5)" },
        total: { score: "101", details: "(10 wkts, 14.1 ov)" },
        yetToBat: "Arshdeep Singh",
        fow: "9/1 (P. Arya, 1.2 ov) · 27/2 (P. Singh, 2.6 ov) · 32/3 (S. Iyer, 3.4 ov) · 38/4 (J. Inglis, 5.1 ov) · 56/5 (S. Singh, 7.3 ov) · 82/6 (M. Stoinis, 10.3 ov) · 97/7 (H. Brar, 13.3 ov) · 101/10 (A. Omarzai, 14.1 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 2.0, maidens: 0, runs: 17, wickets: 1, econ: 8.50 },
            { name: "Yash Dayal", overs: 4.0, maidens: 0, runs: 25, wickets: 2, econ: 6.50 },
            { name: "Josh Hazlewood", overs: 3.1, maidens: 0, runs: 21, wickets: 3, econ: 6.63 },
            { name: "Suyash Sharma", overs: 3.0, maidens: 0, runs: 17, wickets: 3, econ: 5.67 },
            { name: "Krunal Pandya", overs: 1.0, maidens: 0, runs: 10, wickets: 0, econ: 10.00 },
            { name: "Romario Shepherd", overs: 1.0, maidens: 0, runs: 5, wickets: 1, econ: 5.00 }
        ]
    },
    innings2: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "not out", runs: 46, balls: 27, fours: 6, sixes: 3, sr: 207.41 },
            { name: "Virat Kohli", out: "c Josh Inglis b Kyle Jamieson", runs: 12, balls: 12, fours: 2, sixes: 0, sr: 100.00 },
            { name: "Mayank Agarwal (IP)", out: "c Arshdeep Singh b Musheer Khan", runs: 19, balls: 13, fours: 2, sixes: 1, sr: 146.15 },
            { name: "Rajat Patidar (C)", out: "not out", runs: 15, balls: 8, fours: 1, sixes: 1, sr: 187.50 }
        ],
        extras: { total: 4, details: "(LB 4)" },
        total: { score: "106", details: "(2 wkts, 10 ov)" },
        yetToBat: "Jitesh Sharma (Wk), Romario Shepherd, Krunal Pandya, Bhuvneshwar Kumar, Yash Dayal, Josh Hazlewood, Suyash Sharma",
        fow: "30/1 (V. Kohli, 3.2 ov) · 84/2 (M. Agarwal, 7.3 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 2.0, maidens: 0, runs: 20, wickets: 0, econ: 10.00 },
            { name: "Kyle Jamieson", overs: 3.0, maidens: 1, runs: 27, wickets: 1, econ: 9.00 },
            { name: "Azmatullah Omarzai", overs: 1.0, maidens: 0, runs: 16, wickets: 0, econ: 16.00 },
            { name: "Harpreet Brar", overs: 2.0, maidens: 0, runs: 16, wickets: 0, econ: 9.00 },
            { name: "Musheer Khan (IP)", overs: 2.0, maidens: 0, runs: 27, wickets: 1, econ: 13.50 }
        ]
    }
},

// Match 82 (index 81)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '228/5', overs: '20' },
    team2: { name: 'GT', logo: 'Logos/gt_logo.jpg', score: '208/6', overs: '20' },
    status: 'MI won by 20 runs',
    toss: "MI won the toss and decided to bat",
    venue: "PCA New Cricket Stadium",
    pom: "Rohit Sharma", // For his commanding century
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Rohit Sharma", out: "not out", runs: 81, balls: 50, fours: 9, sixes: 4, sr: 162.00 },
            { name: "Jonny Bairstow (Wk)", out: "c David Khan b Prasidh Krishna", runs: 47, balls: 22, fours: 4, sixes: 3, sr: 213.64 },
            { name: "Suryakumar Yadav", out: "c Shahrukh Khan b Sai Kishore", runs: 33, balls: 20, fours: 1, sixes: 3, sr: 165.00 },
            { name: "Tilak Varma", out: "c Kulwant Khejroliya b Mohammed Siraj", runs: 25, balls: 11, fours: 0, sixes: 3, sr: 227.27 },
            { name: "Hardik Pandya (C)", out: "not out", runs: 22, balls: 9, fours: 0, sixes: 3, sr: 244.44 },
            { name: "Naman Dhir", out: "c Shahrukh Khan b Prasidh Krishna", runs: 9, balls: 6, fours: 0, sixes: 1, sr: 150.00 },
            { name: "Mitchell Santner", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 11, details: "(W 4, LB 7)" },
        total: { score: "228", details: "(5 wkts, 20 ov)" },
        yetToBat: "Raj Bawa, Trent Boult, Jasprit Bumrah, Richard Gleeson, Ashwani Kumar (IP)",
        fow: "84/1 (J. Bairstow, 7.2 ov) · 143/2 (S. Yadav, 12.6 ov) · 188/3 (R. Sharma, 16.4 ov) · 194/4 (T. Varma, 17.2 ov) · 205/5 (N. Dhir, 18.4 ov)",
        bowling: [
            { name: "Mohammed Siraj", overs: 4.0, maidens: 0, runs: 37, wickets: 1, econ: 9.25 },
            { name: "Prasidh Krishna", overs: 4.0, maidens: 0, runs: 53, wickets: 2, econ: 13.25 },
            { name: "Sai Kishore", overs: 4.0, maidens: 0, runs: 42, wickets: 2, econ: 10.50 },
            { name: "Rashid Khan", overs: 4.0, maidens: 0, runs: 31, wickets: 0, econ: 7.75 },
            { name: "Gerald Coetzee", overs: 3.0, maidens: 0, runs: 51, wickets: 0, econ: 17.00 },
            { name: "Washington Sundar", overs: 1.0, maidens: 0, runs: 7, wickets: 0, econ: 7.00 }
        ]
    },
    innings2: {
        teamName: 'Titans',
        batting: [
            { name: "Sai Sudharsan", out: "not out", runs: 80, balls: 49, fours: 10, sixes: 1, sr: 163.27 },
            { name: "Shubman Gill (C)", out: "c & b Mitchell Santner", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Manish Pandey (Wk)", out: "c Mitchell Santner b Mitchell Santner", runs: 20, balls: 10, fours: 1, sixes: 2, sr: 200.00 },
            { name: "Will Jacks", out: "c & b Jasprit Bumrah", runs: 48, balls: 24, fours: 5, sixes: 3, sr: 200.00 },
            { name: "Sherfane Rutherford (IP)", out: "c & b Trent Boult", runs: 24, balls: 15, fours: 4, sixes: 0, sr: 160.00 },
            { name: "Rahul Tewatia", out: "not out", runs: 16, balls: 11, fours: 1, sixes: 1, sr: 145.45 },
            { name: "Shahrukh Khan", out: "c Suryakumar Yadav b Ashwani Kumar", runs: 13, balls: 7, fours: 0, sixes: 1, sr: 185.71 },
            { name: "Rashid Khan", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 6, details: "(W 4, LB 2)" },
        total: { score: "208", details: "(6 wkts, 20 ov)" },
        yetToBat: "Sai Kishore, Gerald Coetzee, Prasidh Krishna, Mohammed Siraj",
        fow: "3/1 (S. Gill, 0.4 ov) · 87/2 (M. Pandey, 8.2 ov) · 151/3 (W. Sundar, 13.4 ov) · 170/4 (S. Rutherford, 15.3 ov) · 183/5 (S. Khan, 17.1 ov) · 198/6 (R. Khan, 18.5 ov)",
        bowling: [
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 56, wickets: 2, econ: 14.00 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 27, wickets: 1, econ: 6.75 },
            { name: "Richard Gleeson", overs: 3.3, maidens: 0, runs: 39, wickets: 1, econ: 11.14 },
            { name: "Hardik Pandya (C)", overs: 3.0, maidens: 0, runs: 37, wickets: 0, econ: 12.33 },
            { name: "Mitchell Santner", overs: 1.0, maidens: 0, runs: 16, wickets: 1, econ: 16.00 },
            { name: "Naman Dhir", overs: 1.0, maidens: 0, runs: 9, wickets: 0, econ: 9.00 },
            { name: "Ashwani Kumar (IP)", overs: 3.3, maidens: 0, runs: 28, wickets: 1, econ: 8.00 }
        ]
    }
},
// Match 83 (index 82)
{
    team1: { name: 'MI', logo: 'Logos/mi_logo.jpg', score: '203/6', overs: '20' },
    team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '207/5', overs: '19' },
    status: 'PBKS won by 5 wickets (6 balls left)',
    toss: "PBKS won the toss and decided to bowl",
    venue: "Narendra Modi Stadium",
    pom: "Shreyas Iyer", // For his match-winning knock
    innings1: {
        teamName: 'Indians',
        batting: [
            { name: "Rohit Sharma", out: "not out", runs: 8, balls: 7, fours: 1, sixes: 0, sr: 114.29 },
            { name: "Jonny Bairstow (Wk)", out: "c Prabhsimran Singh b Vyshak Vijay Kumar", runs: 38, balls: 24, fours: 3, sixes: 2, sr: 158.33 },
            { name: "Tilak Varma", out: "c Priyansh Arya b Kyle Jamieson", runs: 44, balls: 29, fours: 2, sixes: 2, sr: 151.72 },
            { name: "Suryakumar Yadav", out: "c Nahal Wadhera b Yuzvendra Chahal", runs: 44, balls: 26, fours: 4, sixes: 3, sr: 169.23 },
            { name: "Hardik Pandya (C)", out: "c Shashank Singh b Azmatullah Omarzai", runs: 15, balls: 13, fours: 1, sixes: 0, sr: 115.38 },
            { name: "Naman Dhir", out: "c Marcus Stoinis b Azmatullah Omarzai", runs: 37, balls: 18, fours: 7, sixes: 0, sr: 205.56 },
            { name: "Raj Bawa", out: "not out", runs: 8, balls: 4, fours: 0, sixes: 0, sr: 200.00 },
            { name: "Mitchell Santner", out: "not out", runs: 0, balls: 1, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 9, details: "(NB 2, W 4, LB 3)" },
        total: { score: "203", details: "(6 wkts, 20 ov)" },
        yetToBat: "Trent Boult, Jasprit Bumrah, Reece Topley, Ashwani Kumar (IP)",
        fow: "18/1 (R. Sharma, 2.3 ov) · 70/2 (J. Bairstow, 8.6 ov) · 142/3 (S. Yadav, 13.5 ov) · 142/4 (T. Varma, 14.1 ov) · 180/5 (H. Pandya, 17.6 ov) · 197/6 (N. Dhir, 19.3 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 44, wickets: 0, econ: 11.00 },
            { name: "Kyle Jamieson", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Marcus Stoinis", overs: 1.0, maidens: 0, runs: 14, wickets: 1, econ: 14.00 },
            { name: "Azmatullah Omarzai", overs: 4.0, maidens: 0, runs: 43, wickets: 2, econ: 10.75 },
            { name: "Vyshak Vijay Kumar", overs: 3.0, maidens: 0, runs: 30, wickets: 1, econ: 10.00 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 39, wickets: 1, econ: 9.75 }
        ]
    },
    innings2: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "c Hardik Pandya b Ashwani Kumar", runs: 29, balls: 10, fours: 2, sixes: 1, sr: 200.00 },
            { name: "Prabhsimran Singh (IP)", out: "not out", runs: 6, balls: 9, fours: 1, sixes: 0, sr: 66.67 },
            { name: "Josh Inglis (Wk)", out: "c Jonny Bairstow b Reece Topley", runs: 38, balls: 21, fours: 5, sixes: 2, sr: 180.95 },
            { name: "Shreyas Iyer (C)", out: "not out", runs: 57, balls: 41, fours: 5, sixes: 5, sr: 212.20 },
            { name: "Nahal Wadhera", out: "c Mitchell Santner b Ashwani Kumar", runs: 48, balls: 29, fours: 4, sixes: 2, sr: 165.52 },
            { name: "Shashank Singh", out: "not out", runs: 2, balls: 3, fours: 0, sixes: 0, sr: 66.67 },
            { name: "Marcus Stoinis", out: "not out", runs: 2, balls: 2, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 4, details: "(NB 1, W 3)" },
        total: { score: "207", details: "(5 wkts, 19 ov)" },
        yetToBat: "Azmatullah Omarzai, Kyle Jamieson, Vyshak Vijay Kumar, Arshdeep Singh, Yuzvendra Chahal",
        fow: "13/1 (P. Singh, 2.1 ov) · 35/2 (P. Arya, 5.1 ov) · 72/3 (J. Inglis, 7.5 ov) · 158/4 (N. Wadhera, 15.3 ov) · 189/5 (S. Singh, 18.4 ov)",
        bowling: [
            { name: "Trent Boult", overs: 4.0, maidens: 0, runs: 38, wickets: 1, econ: 9.50 },
            { name: "Reece Topley", overs: 3.0, maidens: 0, runs: 40, wickets: 0, econ: 13.33 },
            { name: "Jasprit Bumrah", overs: 4.0, maidens: 0, runs: 40, wickets: 0, econ: 10.00 },
            { name: "Ashwani Kumar (IP)", overs: 4.0, maidens: 0, runs: 55, wickets: 2, econ: 13.75 },
            { name: "Mitchell Santner", overs: 2.0, maidens: 0, runs: 15, wickets: 0, econ: 7.50 },
            { name: "Hardik Pandya (C)", overs: 2.0, maidens: 0, runs: 19, wickets: 1, econ: 9.50 }
        ]
    }
},
// Match 84 (index 83)
{
    team1: { name: 'RCB', logo: 'Logos/rcb_logo.png', score: '190/9', overs: '20' },
    team2: { name: 'PBKS', logo: 'Logos/pbks_logo.jpg', score: '184/7', overs: '20' },
    status: 'RCB won by 6 runs',
    toss: "PBKS won the toss and decided to bowl",
    venue: "Narendra Modi Stadium",
    pom: "Virat Kohli", // For his crucial half-century
    innings1: {
        teamName: 'Royal Challengers',
        batting: [
            { name: "Phil Salt", out: "c Shreyas Iyer b Kyle Jamieson", runs: 16, balls: 9, fours: 2, sixes: 1, sr: 177.78 },
            { name: "Virat Kohli", out: "not out", runs: 43, balls: 35, fours: 3, sixes: 0, sr: 122.86 },
            { name: "Mayank Agarwal", out: "c Arshdeep Singh b Yuzvendra Chahal", runs: 24, balls: 18, fours: 2, sixes: 1, sr: 133.33 },
            { name: "Rajat Patidar (C)", out: "not out", runs: 28, balls: 16, fours: 1, sixes: 2, sr: 162.50 },
            { name: "Liam Livingstone", out: "c Kyle Jamieson b Kyle Jamieson", runs: 25, balls: 15, fours: 0, sixes: 2, sr: 166.67 },
            { name: "Jitesh Sharma (Wk)", out: "c Vyshak Vijay Kumar b Vyshak Vijay Kumar", runs: 24, balls: 10, fours: 2, sixes: 2, sr: 240.00 },
            { name: "Romario Shepherd", out: "not out", runs: 17, balls: 9, fours: 1, sixes: 1, sr: 188.89 },
            { name: "Krunal Pandya", out: "c Shreyas Iyer b Arshdeep Singh", runs: 4, balls: 5, fours: 0, sixes: 0, sr: 80.00 },
            { name: "Bhuvneshwar Kumar", out: "c Priyansh Arya b Arshdeep Singh", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Yash Dayal", out: "not out", runs: 1, balls: 1, fours: 0, sixes: 0, sr: 100.00 }
        ],
        extras: { total: 9, details: "(W 9)" },
        total: { score: "190", details: "(9 wkts, 20 ov)" },
        yetToBat: "Josh Hazlewood, Suyash Sharma",
        fow: "18/1 (P. Salt, 1.4 ov) · 66/2 (M. Agarwal, 8.2 ov) · 96/3 (R. Patidar, 10.5 ov) · 131/4 (V. Kohli, 14.5 ov) · 167/5 (L. Livingstone, 16.5 ov) · 171/6 (J. Sharma, 17.4 ov) · 188/7 (R. Shepherd, 19.2 ov) · 189/8 (K. Pandya, 19.4 ov) · 190/9 (B. Kumar, 19.6 ov)",
        bowling: [
            { name: "Arshdeep Singh", overs: 4.0, maidens: 0, runs: 40, wickets: 3, econ: 10.00 },
            { name: "Kyle Jamieson", overs: 4.0, maidens: 0, runs: 48, wickets: 3, econ: 12.00 },
            { name: "Azmatullah Omarzai", overs: 4.0, maidens: 0, runs: 35, wickets: 1, econ: 8.75 },
            { name: "Vyshak Vijay Kumar", overs: 4.0, maidens: 0, runs: 30, wickets: 1, econ: 7.50 },
            { name: "Yuzvendra Chahal", overs: 4.0, maidens: 0, runs: 37, wickets: 1, econ: 9.25 }
        ]
    },
    innings2: {
        teamName: 'Kings',
        batting: [
            { name: "Priyansh Arya", out: "c Phil Salt b Josh Hazlewood", runs: 24, balls: 19, fours: 4, sixes: 0, sr: 126.32 },
            { name: "Prabhsimran Singh", out: "c Krunal Pandya b Krunal Pandya", runs: 26, balls: 22, fours: 4, sixes: 0, sr: 118.18 },
            { name: "Josh Inglis (Wk)", out: "c Krunal Pandya b Krunal Pandya", runs: 39, balls: 23, fours: 4, sixes: 1, sr: 169.57 },
            { name: "Shreyas Iyer (C)", out: "c Jitesh Sharma b Romario Shepherd", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Nahal Wadhera", out: "c Bhuvneshwar Kumar b Bhuvneshwar Kumar", runs: 15, balls: 18, fours: 0, sixes: 1, sr: 83.33 },
            { name: "Shashank Singh", out: "not out", runs: 61, balls: 30, fours: 3, sixes: 6, sr: 203.33 },
            { name: "Marcus Stoinis", out: "c Yash Dayal b Bhuvneshwar Kumar", runs: 6, balls: 2, fours: 0, sixes: 1, sr: 300.00 },
            { name: "Azmatullah Omarzai", out: "not out", runs: 1, balls: 2, fours: 0, sixes: 0, sr: 50.00 },
            { name: "Kyle Jamieson", out: "not out", runs: 0, balls: 2, fours: 0, sixes: 0, sr: 0.00 }
        ],
        extras: { total: 11, details: "(W 3, LB 8)" },
        total: { score: "184", details: "(7 wkts, 20 ov)" },
        yetToBat: "Vyshak Vijay Kumar, Arshdeep Singh, Yuzvendra Chahal",
        fow: "43/1 (P. Arya, 4.6 ov) · 72/2 (P. Singh, 8.3 ov) · 79/3 (S. Iyer, 9.4 ov) · 98/4 (J. Inglis, 12.1 ov) · 138/5 (N. Wadhera, 16.2 ov) · 142/6 (M. Stoinis, 16.4 ov) · 143/7 (A. Omarzai, 17.2 ov)",
        bowling: [
            { name: "Bhuvneshwar Kumar", overs: 4.0, maidens: 0, runs: 38, wickets: 2, econ: 9.50 },
            { name: "Yash Dayal", overs: 3.0, maidens: 0, runs: 18, wickets: 1, econ: 6.00 },
            { name: "Josh Hazlewood", overs: 4.0, maidens: 0, runs: 54, wickets: 1, econ: 13.50 },
            { name: "Krunal Pandya", overs: 4.0, maidens: 0, runs: 17, wickets: 2, econ: 4.25 },
            { name: "Suyash Sharma", overs: 2.0, maidens: 0, runs: 19, wickets: 0, econ: 9.50 },
            { name: "Romario Shepherd", overs: 3.0, maidens: 0, runs: 30, wickets: 1, econ: 10.00 }
        ]
    }
}


];

const pointsTableData = [
    { pos: 1, logo: 'Logos/pbks_logo.jpg', name: 'Punjab Kings', p: 14, w: 9, l: 4, nr: 1, nrr: 0.372, for: '2447/246.4', against: '2395/250.5', pts: 19, form: ['W', 'L', 'W', 'W', 'W'] },
    { pos: 2, logo: 'Logos/rcb_logo.png', name: 'Royal Challengers Bengaluru', p: 14, w: 9, l: 4, nr: 1, nrr: 0.301, for: '2357/243.5', against: '2321/247.5', pts: 19, form: ['W', 'L', 'N', 'W', 'W'] },
    { pos: 3, logo: 'Logos/gt_logo.jpg', name: 'Gujarat Titans', p: 14, w: 9, l: 5, nr: 0, nrr: 0.254, for: '2684/271.5', against: '2639/274.2', pts: 18, form: ['L', 'L', 'W', 'W', 'W'] },
    { pos: 4, logo: 'Logos/mi_logo.jpg', name: 'Mumbai Indians', p: 14, w: 8, l: 6, nr: 0, nrr: 1.142, for: '2472/261.2', against: '2301/276.4', pts: 16, form: ['L', 'W', 'L', 'W', 'W'] },
    { pos: 5, logo: 'Logos/dc_logo.png', name: 'Delhi Capitals', p: 14, w: 7, l: 6, nr: 1, nrr: 0.011, for: '2354/250.4', against: '2409/256.5', pts: 15, form: ['W', 'L', 'L', 'N', 'L'] },
    { pos: 6, logo: 'Logos/srh_logo.jpg', name: 'Sunrisers Hyderabad', p: 14, w: 6, l: 7, nr: 1, nrr: -0.241, for: '2519/255.3', against: '2451/242.4', pts: 13, form: ['W', 'W', 'W', 'N', 'L'] },
    { pos: 7, logo: 'Logos/lsg_logo.jpg', name: 'Lucknow Super Giants', p: 14, w: 6, l: 8, nr: 0, nrr: -0.376, for: '2732/275.4', against: '2779/270.1', pts: 12, form: ['L', 'W', 'L', 'L', 'L'] },
    { pos: 8, logo: 'Logos/kkr_logo.png', name: 'Kolkata Knight Riders', p: 14, w: 5, l: 7, nr: 2, nrr: -0.305, for: '1995/227.4', against: '2075/228.5', pts: 12, form: ['L', 'N', 'L', 'W', 'W'] },
    { pos: 9, logo: 'Logos/rr_logo.jpg', name: 'Rajasthan Royals', p: 14, w: 4, l: 10, nr: 0, nrr: -0.549, for: '2603/273.0', against: '2773/275.0', pts: 8, form: ['W', 'L', 'L', 'L', 'W'] },
    { pos: 10, logo: 'Logos/csk_logo.jpg', name: 'Chennai Super Kings', p: 14, w: 4, l: 10, nr: 0, nrr: -0.647, for: '2441/278.2', against: '2461/261.2', pts: 8, form: ['W', 'L', 'W', 'L', 'L'] },
];

// --- VIEW SWITCHING AND TABLE GENERATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    generatePointsTable();
    showView('schedule-view');
});

function showView(viewId) {
    document.querySelectorAll('.view-content').forEach(view => view.style.display = 'none');
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(viewId).style.display = 'block';
    document.getElementById(viewId.replace('-view', '-btn')).classList.add('active');
}

function generatePointsTable() {
    const tableBody = document.getElementById('points-table-body');
    if (!tableBody) return;
    tableBody.innerHTML = '';

    pointsTableData.forEach(team => {
        const row = document.createElement('tr');
        const formHtml = team.form.map(result =>
            `<span class="form-icon ${result.toLowerCase()}">${result[0]}</span>`
        ).join('');
        row.innerHTML = `
            <td>${team.pos}</td> <td class="team-name-cell"><img src="${team.logo}" class="team-logo" alt="${team.name}"> ${team.name}</td>
            <td>${team.p}</td> <td>${team.w}</td> <td>${team.l}</td> <td>${team.nr}</td> <td>${team.nrr}</td>
            <td>${team.for}</td> <td>${team.against}</td> <td>${team.pts}</td> <td>${formHtml}</td>
        `;
        tableBody.appendChild(row);
    });
}

// --- SCORECARD MODAL LOGIC (FINALIZED) ---
const modal = document.getElementById('scorecard-modal');

function openScorecard(matchIndex) {
    const data = matchData[matchIndex];

    if (!data || data.suspended || data.abandoned || data.noResult) {
        showCustomMessageBox(data ? (data.status || 'This match was suspended due to IND-PAK tensions.') : 'Scorecard will be available after the match.');
        return;
    }

    document.getElementById('modal-team1-name').innerText = data.team1.name;
    document.getElementById('modal-team1-logo').src = data.team1.logo;
    document.getElementById('modal-team1-score').innerText = `${data.team1.score} (${data.team1.overs} ov)`;

    document.getElementById('modal-team2-name').innerText = data.team2.name;
    document.getElementById('modal-team2-logo').src = data.team2.logo;
    document.getElementById('modal-team2-score').innerText = `${data.team2.score} (${data.team2.overs} ov)`;
    document.getElementById('modal-status').innerText = data.status;

    const tabBtn1 = document.getElementById('tab-btn-1');
    const tabBtn2 = document.getElementById('tab-btn-2');
    tabBtn1.innerText = data.innings1.teamName;
    tabBtn2.innerText = data.innings2.teamName;

    populateInningContent('1', data.innings1, data.innings2);
    populateInningContent('2', data.innings2, data.innings1);

    document.getElementById('modal-toss').innerText = data.toss;
    document.getElementById('modal-venue').innerText = data.venue;

    showInning(1);
    modal.style.display = 'flex';
}

function populateInningContent(inningNum, inningData, opponentInningData) {
    const battingBody = document.getElementById(`modal-inning${inningNum}-batting-body`);
    battingBody.innerHTML = '';
    inningData.batting.forEach(p => {
        battingBody.innerHTML += `<tr><td>${p.name}<br><small>${p.out}</small></td><td>${p.runs}</td><td>${p.balls}</td><td>${p.fours}</td><td>${p.sixes}</td><td>${p.sr.toFixed(2)}</td></tr>`;
    });

    document.getElementById(`inning${inningNum}-extras-total`).innerText = inningData.extras.total;
    document.getElementById(`inning${inningNum}-extras-details`).innerText = inningData.extras.details;
    document.getElementById(`inning${inningNum}-total-score`).innerText = inningData.total.score;
    document.getElementById(`inning${inningNum}-total-details`).innerText = inningData.total.details;
    document.getElementById(`inning${inningNum}-yet-to-bat`).innerText = inningData.yetToBat;
    document.getElementById(`inning${inningNum}-fow`).innerText = inningData.fow;

    const bowlingBody = document.getElementById(`modal-inning${inningNum}-bowling-body`);
    bowlingBody.innerHTML = '';
    opponentInningData.bowling.forEach(p => {
        bowlingBody.innerHTML += `<tr><td>${p.name}</td><td>${p.overs}</td><td>${p.maidens}</td><td>${p.runs}</td><td>${p.wickets}</td><td>${p.econ.toFixed(2)}</td></tr>`;
    });
}

function showInning(inningNum) {
    document.getElementById('inning-1').style.display = 'none';
    document.getElementById('inning-2').style.display = 'none';
    document.getElementById(`inning-${inningNum}`).style.display = 'block';

    document.getElementById('tab-btn-1').classList.remove('active');
    document.getElementById('tab-btn-2').classList.remove('active');
    document.getElementById(`tab-btn-${inningNum}`).classList.add('active');
}

function closeScorecard() {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) closeScorecard();
}

function showCustomMessageBox(message) {
    const existingBox = document.getElementById('custom-message-box');
    if (existingBox) existingBox.remove();

    const messageBox = document.createElement('div');
    messageBox.id = 'custom-message-box';
    messageBox.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background-color: #333; color: white; padding: 15px 25px; border-radius: 8px;
        border: 1px solid #ff4500; box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        z-index: 2000; font-family: Arial, sans-serif; opacity: 0;
        transition: opacity 0.3s ease-in-out;
    `;
    messageBox.innerText = message;
    document.body.appendChild(messageBox);

    setTimeout(() => { messageBox.style.opacity = 1; }, 10);
    setTimeout(() => {
        messageBox.style.opacity = 0;
        setTimeout(() => { messageBox.remove(); }, 300);
    }, 3000);
}

