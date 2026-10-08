
const jobs = [

["HCV/HCS Ground-Truthing",
"19 October 2026 - 9 November 2026",
"Field Survey",
"Sambas",
"Field allowance: IDR 350,000/day",
"22 days x IDR 350,000 = IDR 7,700,000"],

["ESG Compliance Field Verification",
"19 October 2026 - 9 November 2026",
"Ground Verification",
"Sambas Concession Area",
"Field allowance: IDR 350,000/day",
"22 days x IDR 350,000 = IDR 7,700,000"],

["Environmental Risk Observation",
"20 October 2026 - 8 November 2026",
"Field Survey",
"Sambas",
"Field allowance: IDR 350,000/day",
"20 days x IDR 350,000 = IDR 7,000,000"],

["Social Impact Assessment Support",
"22 October 2026 - 5 November 2026",
"Stakeholder Field Visit",
"Local Communities",
"Field allowance: IDR 350,000/day",
"15 days x IDR 350,000 = IDR 5,250,000"],

["Stakeholder Engagement Documentation",
"23 October 2026 - 7 November 2026",
"Field Activity",
"Sambas",
"Field allowance: IDR 350,000/day",
"16 days x IDR 350,000 = IDR 5,600,000"],

["Biodiversity & Conservation Area Monitoring",
"25 October 2026 - 3 November 2026",
"Field Survey",
"Concession Area",
"Field allowance: IDR 350,000/day",
"10 days x IDR 350,000 = IDR 3,500,000"],

["Sustainability Compliance Checklist Review",
"9 November 2026",
"Office Review",
"Base Office",
"No field allowance",
"Office assignment"],

["ESG Evidence Collection & Documentation",
"10 November 2026 - 11 November 2026",
"Document Review",
"Base Office",
"No field allowance",
"Office assignment"],

["Demobilization (Demob)",
"10 November 2026 - 11 November 2026",
"Ground Return",
"Sambas to Base Office",
"Demobilization allowance",
"IDR 900,000"],

["Post-Fieldwork Data Consolidation",
"12 November 2026 - 16 November 2026",
"Data Processing",
"Head Office",
"No field allowance",
"Office assignment"],

["ESG Field Report Preparation",
"13 November 2026 - 18 November 2026",
"Reporting",
"Head Office",
"No field allowance",
"Office assignment"],

["Final ESG Debriefing",
"19 November 2026",
"Presentation",
"Head Office",
"No field allowance",
"Office assignment"]

];


const container=document.getElementById("jobs");


jobs.forEach((j,i)=>{

container.innerHTML += `
<div class="job">

<div class="job-header">
<h3>${i+1}. ${j[0]}</h3>
<span class="badge">${j[2]}</span>
</div>

<p>📅 ${j[1]}</p>
<p>📍 Location: ${j[3]}</p>

<div class="cost">
<strong>Survey / Assignment Cost</strong><br>
${j[4]}<br>
<b>${j[5]}</b>
</div>

<br>

<span class="badge">Approved</span>

<button>Download Assignment Letter</button>

</div>
`;

});
