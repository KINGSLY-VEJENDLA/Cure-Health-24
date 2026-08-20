const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
require("dotenv").config();

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);


// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const healthConditions = {

    diabetes: {

        title: "Diabetes",
        category: "Diabetes",

        shortDescription:
            "Diabetes is a chronic health condition that affects how the body regulates blood glucose levels.",

        overview:
            "Diabetes occurs when the body does not produce enough insulin, does not use insulin effectively, or both. Insulin helps glucose move from the bloodstream into cells where it can be used for energy. Different types of diabetes can have different causes and management approaches.",

        symptoms: [
            "Increased thirst",
            "Frequent urination",
            "Increased hunger",
            "Unexplained weight changes",
            "Fatigue",
            "Blurred vision",
            "Slow-healing wounds"
        ],

        riskFactors: [
            "Family history of diabetes",
            "Overweight or obesity",
            "Physical inactivity",
            "Certain medical conditions",
            "Age and other individual risk factors"
        ],

        treatment: [
            "Healthy eating and lifestyle changes",
            "Regular physical activity when appropriate",
            "Monitoring blood glucose as advised",
            "Medications when prescribed",
            "Regular follow-up with healthcare professionals"
        ],

        prevention: [
            "Maintain a balanced diet",
            "Stay physically active",
            "Maintain a healthy weight",
            "Attend recommended health checkups",
            "Follow medical advice and monitoring recommendations"
        ]

    },


    hypertension: {

        title: "High Blood Pressure",
        category: "Heart Health",

        shortDescription:
            "High blood pressure, also known as hypertension, occurs when the force of blood against artery walls remains elevated.",

        overview:
            "Blood pressure naturally changes throughout the day. Hypertension generally refers to blood pressure that remains higher than recommended over time. Because it may not always cause noticeable symptoms, regular blood pressure checks are important.",

        symptoms: [
            "High blood pressure may have no obvious symptoms",
            "Headaches may occur in some situations",
            "Dizziness may occur",
            "Shortness of breath may occur",
            "Nosebleeds can occur in some circumstances"
        ],

        riskFactors: [
            "Family history of high blood pressure",
            "High sodium intake",
            "Physical inactivity",
            "Overweight or obesity",
            "Smoking",
            "Excessive alcohol consumption",
            "Increasing age"
        ],

        treatment: [
            "Healthy eating habits",
            "Regular physical activity",
            "Reducing sodium intake when advised",
            "Maintaining a healthy weight",
            "Blood pressure medicines when prescribed",
            "Regular blood pressure monitoring"
        ],

        prevention: [
            "Eat a balanced diet",
            "Exercise regularly",
            "Maintain a healthy weight",
            "Avoid smoking",
            "Limit excessive alcohol consumption",
            "Check blood pressure regularly"
        ]

    },


    "heart-health": {

        title: "Heart Disease",
        category: "Heart Health",

        shortDescription:
            "Heart disease refers to a range of conditions that affect the heart and cardiovascular system.",

        overview:
            "Heart disease includes several different conditions affecting the heart and blood vessels. Some risk factors can be managed through healthy lifestyle choices and regular medical care, while others may be related to age, family history or other medical conditions.",

        symptoms: [
            "Chest discomfort or pain",
            "Shortness of breath",
            "Unusual fatigue",
            "Dizziness",
            "Palpitations",
            "Swelling in the legs or feet"
        ],

        riskFactors: [
            "High blood pressure",
            "High cholesterol",
            "Diabetes",
            "Smoking",
            "Physical inactivity",
            "Family history of heart disease",
            "Overweight or obesity"
        ],

        treatment: [
            "Lifestyle changes",
            "Medicines prescribed by a healthcare professional",
            "Regular monitoring",
            "Management of blood pressure and cholesterol",
            "Medical procedures when appropriate"
        ],

        prevention: [
            "Eat a heart-healthy diet",
            "Exercise regularly",
            "Avoid smoking",
            "Manage blood pressure",
            "Manage cholesterol levels",
            "Maintain a healthy weight",
            "Attend regular health checkups"
        ]

    },


    asthma: {

        title: "Asthma",
        category: "Respiratory Health",

        shortDescription:
            "Asthma is a condition that affects the airways and can cause breathing difficulties.",

        overview:
            "Asthma can cause the airways to become inflamed and narrowed, which may make breathing difficult. Symptoms and triggers can vary between individuals.",

        symptoms: [
            "Wheezing",
            "Shortness of breath",
            "Chest tightness",
            "Coughing",
            "Breathing difficulties",
            "Symptoms that may worsen at night or early in the morning"
        ],

        riskFactors: [
            "Family history of asthma",
            "Allergies",
            "Exposure to smoke",
            "Air pollution",
            "Respiratory infections",
            "Occupational exposure to certain substances"
        ],

        treatment: [
            "Identifying and avoiding triggers",
            "Inhaled medicines when prescribed",
            "Following an asthma management plan",
            "Regular medical reviews",
            "Monitoring symptoms and breathing"
        ],

        prevention: [
            "Identify personal asthma triggers",
            "Avoid exposure to tobacco smoke",
            "Follow prescribed treatment",
            "Keep regular medical appointments",
            "Monitor symptoms"
        ]

    },


    arthritis: {

        title: "Arthritis",
        category: "Bone & Joint Health",

        shortDescription:
            "Arthritis describes conditions that can cause pain, stiffness and inflammation in the joints.",

        overview:
            "Arthritis includes many different joint conditions. Symptoms can vary depending on the type and severity of arthritis. Treatment often focuses on managing symptoms, maintaining mobility and supporting overall joint health.",

        symptoms: [
            "Joint pain",
            "Joint stiffness",
            "Swelling around joints",
            "Reduced range of motion",
            "Joint tenderness",
            "Difficulty with certain movements"
        ],

        riskFactors: [
            "Increasing age",
            "Family history",
            "Previous joint injury",
            "Overweight or obesity",
            "Certain autoimmune conditions",
            "Repeated stress on joints"
        ],

        treatment: [
            "Physical activity appropriate to the individual",
            "Physical therapy when recommended",
            "Pain management",
            "Medicines when prescribed",
            "Weight management when appropriate",
            "Medical or surgical treatment in selected cases"
        ],

        prevention: [
            "Maintain a healthy weight",
            "Stay physically active",
            "Protect joints from unnecessary injury",
            "Use proper techniques during physical activities",
            "Seek medical advice for persistent joint symptoms"
        ]

    },


    migraine: {

        title: "Migraine",
        category: "Neurology",

        shortDescription:
            "Migraine is a neurological condition that can cause recurring headaches and other symptoms.",

        overview:
            "Migraine can involve moderate to severe headaches and may occur with other symptoms such as sensitivity to light or sound, nausea or visual disturbances. Triggers can vary from person to person.",

        symptoms: [
            "Moderate to severe headache",
            "Throbbing or pulsating pain",
            "Nausea",
            "Sensitivity to light",
            "Sensitivity to sound",
            "Visual disturbances in some people"
        ],

        riskFactors: [
            "Family history of migraine",
            "Stress",
            "Changes in sleep",
            "Certain foods or drinks",
            "Hormonal changes",
            "Environmental triggers"
        ],

        treatment: [
            "Identifying personal triggers",
            "Rest and appropriate lifestyle measures",
            "Medicines recommended by a healthcare professional",
            "Preventive medicines when prescribed",
            "Maintaining regular sleep and meal patterns"
        ],

        prevention: [
            "Maintain a regular sleep schedule",
            "Stay adequately hydrated",
            "Eat regular balanced meals",
            "Identify and avoid personal triggers",
            "Manage stress",
            "Keep a headache diary when recommended"
        ]

    }

};

app.get(
    "/health-library/conditions/:condition",
    (req, res) => {

        const condition =
            healthConditions[req.params.condition];

        if (!condition) {

    return res.status(404).send(`
        <h1>Page Not Found</h1>
        <p>The health condition you are looking for does not exist.</p>
        <a href="/health-library/conditions">
            Back to Health Library
        </a>
    `);

}

        res.render(
            "pages/health-condition",
            {
                condition
            }
        );

    }
);


const healthTopics = {

    headache: {

        title: "Common Causes of Headaches",

        category: "Neurology",

        shortDescription:
            "Headaches can have many different causes, ranging from common lifestyle factors to conditions that may require medical evaluation.",

        overview:
            "A headache is pain or discomfort in the head, scalp or neck. Different types of headaches can have different patterns and triggers. Understanding when headaches occur and what symptoms accompany them can help a healthcare professional evaluate them.",

        symptoms: [
            "Pain or pressure in the head",
            "Throbbing or pulsating pain",
            "Sensitivity to light or sound",
            "Nausea in some cases",
            "Pain around the forehead or temples",
            "Neck discomfort"
        ],

        riskFactors: [
            "Stress",
            "Poor sleep",
            "Dehydration",
            "Skipping meals",
            "Certain foods or drinks",
            "Excessive screen time",
            "Changes in routine"
        ],

        treatment: [
            "Adequate hydration",
            "Regular meals and sleep",
            "Reducing known triggers",
            "Rest in a quiet environment",
            "Medicines when recommended by a healthcare professional"
        ],

        prevention: [
            "Maintain regular sleep",
            "Stay hydrated",
            "Eat regular balanced meals",
            "Manage stress",
            "Identify personal triggers",
            "Seek medical advice for recurring or severe headaches"
        ]

    },


    dentalHealth: {

        title: "Dental Health",

        category: "Dental Health",

        shortDescription:
            "Good oral hygiene helps maintain healthy teeth, gums and overall oral health.",

        overview:
            "Dental health involves caring for the teeth, gums and other structures of the mouth. Regular brushing, flossing, professional dental examinations and healthy lifestyle choices can support good oral health.",

        symptoms: [
            "Tooth pain",
            "Gum bleeding",
            "Tooth sensitivity",
            "Bad breath",
            "Swollen gums",
            "Tooth discoloration"
        ],

        riskFactors: [
            "Poor oral hygiene",
            "High sugar intake",
            "Smoking or tobacco use",
            "Irregular dental checkups",
            "Certain medical conditions",
            "Dry mouth"
        ],

        treatment: [
            "Regular professional dental examinations",
            "Professional cleaning when needed",
            "Treatment of cavities",
            "Treatment of gum conditions",
            "Dental procedures when recommended"
        ],

        prevention: [
            "Brush teeth twice daily",
            "Clean between teeth regularly",
            "Limit excessive sugary foods and drinks",
            "Avoid tobacco",
            "Visit a dental professional regularly"
        ]

    },


    healthyEating: {

        title: "Healthy Eating",

        category: "Nutrition & Wellness",

        shortDescription:
            "Balanced nutrition provides the body with essential nutrients needed for energy, growth and overall health.",

        overview:
            "Healthy eating involves choosing a variety of nutritious foods and maintaining balanced eating habits. Individual nutritional needs can vary based on age, activity level, medical conditions and other factors.",

        symptoms: [
            "Healthy eating is a preventive wellness topic rather than a medical condition."
        ],

        riskFactors: [
            "Highly processed food consumption",
            "Excessive added sugar",
            "High sodium intake",
            "Low intake of fruits and vegetables",
            "Irregular eating patterns"
        ],

        treatment: [
            "Creating balanced meals",
            "Increasing nutrient-rich foods",
            "Reducing excessive processed foods",
            "Maintaining appropriate portion sizes",
            "Seeking professional nutritional guidance when needed"
        ],

        prevention: [
            "Eat a variety of fruits and vegetables",
            "Choose whole grains when appropriate",
            "Include suitable sources of protein",
            "Stay adequately hydrated",
            "Limit excessive added sugar and sodium"
        ]

    },


    womensHealth: {

        title: "Women's Health",

        category: "Women's Health",

        shortDescription:
            "Women's health includes preventive care, reproductive health and many other aspects of physical and emotional wellbeing.",

        overview:
            "Women's healthcare needs can change throughout different stages of life. Preventive health examinations and appropriate professional guidance can help identify health concerns early.",

        symptoms: [
            "Symptoms vary depending on the health concern",
            "Changes in menstrual patterns",
            "Unusual pelvic discomfort",
            "Unusual breast changes",
            "Persistent fatigue"
        ],

        riskFactors: [
            "Family medical history",
            "Age",
            "Lifestyle factors",
            "Hormonal changes",
            "Existing medical conditions"
        ],

        treatment: [
            "Regular preventive healthcare",
            "Appropriate screening",
            "Professional evaluation of symptoms",
            "Treatment based on individual needs"
        ],

        prevention: [
            "Attend recommended health screenings",
            "Maintain a balanced lifestyle",
            "Stay physically active",
            "Discuss persistent symptoms with a healthcare professional",
            "Keep regular healthcare appointments"
        ]

    },


    childrensHealth: {

        title: "Children's Health",

        category: "Children's Health",

        shortDescription:
            "Children's healthcare focuses on healthy growth, development, prevention and early identification of health concerns.",

        overview:
            "Children have healthcare needs that change as they grow. Regular pediatric care can support healthy development and provide opportunities to identify concerns early.",

        symptoms: [
            "Symptoms vary depending on the condition",
            "Persistent fever",
            "Changes in appetite",
            "Unusual tiredness",
            "Changes in behavior",
            "Breathing difficulties"
        ],

        riskFactors: [
            "Family medical history",
            "Environmental exposures",
            "Nutrition",
            "Infectious disease exposure",
            "Underlying medical conditions"
        ],

        treatment: [
            "Professional pediatric evaluation",
            "Age-appropriate treatment",
            "Recommended vaccinations",
            "Nutritional guidance",
            "Regular developmental monitoring"
        ],

        prevention: [
            "Maintain recommended vaccinations",
            "Provide balanced nutrition",
            "Encourage physical activity",
            "Maintain good hygiene",
            "Attend regular pediatric checkups"
        ]

    },


    backPain: {

        title: "Back Pain",

        category: "Orthopedics",

        shortDescription:
            "Back pain can result from many different causes, including muscle strain, injury and other health conditions.",

        overview:
            "Back pain can range from mild temporary discomfort to persistent pain that affects daily activities. The cause and appropriate treatment can vary considerably between individuals.",

        symptoms: [
            "Lower back pain",
            "Muscle stiffness",
            "Difficulty moving",
            "Pain that may spread to the legs",
            "Muscle weakness in some cases"
        ],

        riskFactors: [
            "Poor posture",
            "Physical inactivity",
            "Heavy lifting",
            "Previous injury",
            "Overweight or obesity",
            "Certain occupations"
        ],

        treatment: [
            "Appropriate physical activity",
            "Physical therapy when recommended",
            "Posture improvement",
            "Pain management",
            "Medical evaluation when symptoms persist"
        ],

        prevention: [
            "Maintain good posture",
            "Stay physically active",
            "Use proper lifting techniques",
            "Maintain a healthy weight",
            "Avoid prolonged periods of inactivity"
        ]

    }

};
// ==============================
// ROUTES
// ==============================

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.get("/about", (req, res) => {
    res.render("pages/about");
});

app.get("/medical-services", (req, res) => {
    res.render("pages/medical-services");
});

app.get("/find-a-doctor", (req, res) => {
    res.render("pages/find-doctor");
});

app.get("/health-library", (req, res) => {
    res.render("pages/health-library");
});

app.get("/health-library/conditions", (req, res) => {
    res.render("pages/health-conditions");
});


app.get("/appointment", (req, res) => {
    res.render("pages/appointment");
});

app.get("/contact", (req, res) => {
    res.render("pages/contact");
});

app.get("/privacy-policy", (req, res) => {
    res.render("pages/privacy");
});

app.get("/terms", (req, res) => {
    res.render("pages/terms");
});

app.get("/services", (req, res) => {
    res.render("pages/services");
});

// ==========================================
// HEALTH LIBRARY - GENERAL PAGES
// ==========================================

app.get("/health-library/symptoms/headache", (req, res) => {

    res.render("pages/health-topic", {
        topic: healthTopics.headache
    });

});


app.get("/health-library/dental-health", (req, res) => {

    res.render("pages/health-topic", {
        topic: healthTopics.dentalHealth
    });

});


app.get("/health-library/articles/healthy-eating", (req, res) => {

    res.render("pages/health-topic", {
        topic: healthTopics.healthyEating
    });

});


app.get("/health-library/womens-health", (req, res) => {

    res.render("pages/health-topic", {
        topic: healthTopics.womensHealth
    });

});


app.get("/health-library/childrens-health", (req, res) => {

    res.render("pages/health-topic", {
        topic: healthTopics.childrensHealth
    });

});


app.get("/health-library/symptoms/back-pain", (req, res) => {

    res.render("pages/health-topic", {
        topic: healthTopics.backPain
    });

});



// =================================
// MEDICAL SPECIALTY PAGES
// =================================

const specialties = {

    cardiology: {
        name: "Cardiology",
        shortName: "Heart Care",
        description:
            "Comprehensive care for your heart and cardiovascular health.",
        image: "/images/services/cardiology.jpg",

        overview:
            "Our cardiology services focus on the prevention, diagnosis and management of heart and cardiovascular conditions. We aim to make it easier for patients to access appropriate heart care and medical guidance.",

        services: [
            "Heart health evaluation",
            "Cardiovascular consultation",
            "Blood pressure management",
            "Heart disease evaluation",
            "Cardiac risk assessment",
            "Preventive heart care"
        ]
    },


    dentistry: {
        name: "Dentistry",
        shortName: "Dental Care",
        description:
            "Professional dental care for healthy teeth and gums.",
        image: "/images/services/dentistry.jpg",

        overview:
            "Our dental care services support oral health through preventive care, evaluation and treatment. Regular dental care can help maintain healthy teeth and gums.",

        services: [
            "Dental checkups",
            "Preventive dental care",
            "Teeth cleaning",
            "Oral health evaluation",
            "Gum care",
            "General dental consultation"
        ]
    },


    gastroenterology: {
        name: "Gastroenterology",
        shortName: "Digestive Health",
        description:
            "Specialized care for digestive system health and conditions.",
        image: "/images/services/gastroenterology.jpg",

        overview:
            "Gastroenterology focuses on the digestive system, including the stomach, intestines, liver and related organs. Our services help patients access evaluation and appropriate digestive health care.",

        services: [
            "Digestive health consultation",
            "Stomach and intestinal evaluation",
            "Liver health assessment",
            "Digestive disorder evaluation",
            "Preventive digestive care",
            "Specialist consultation"
        ]
    },


    neurology: {
        name: "Neurology",
        shortName: "Neurological Care",
        description:
            "Specialized healthcare for the brain, nerves and nervous system.",
        image: "/images/services/neurology.jpg",

        overview:
            "Neurology focuses on conditions affecting the brain, spinal cord, nerves and nervous system. Our neurological care services support evaluation, diagnosis and ongoing healthcare needs.",

        services: [
            "Neurological consultation",
            "Nervous system evaluation",
            "Headache assessment",
            "Neurological condition evaluation",
            "Brain health consultation",
            "Specialist care"
        ]
    },


    orthopedics: {
        name: "Orthopedics",
        shortName: "Bone & Joint Care",
        description:
            "Care for bones, joints, muscles and the musculoskeletal system.",
        image: "/images/services/orthopedics.jpg",

        overview:
            "Orthopedic care focuses on the health of bones, joints, muscles, ligaments and related structures. Our services support patients with musculoskeletal healthcare needs.",

        services: [
            "Bone and joint consultation",
            "Musculoskeletal evaluation",
            "Joint pain assessment",
            "Mobility evaluation",
            "Sports injury consultation",
            "Orthopedic specialist care"
        ]
    },


    pediatrics: {
        name: "Pediatrics",
        shortName: "Children's Care",
        description:
            "Healthcare services designed around the needs of children.",
        image: "/images/services/pediatrics.jpg",

        overview:
            "Pediatric care focuses on the health and development of infants, children and adolescents. Our goal is to support families with accessible and appropriate children's healthcare.",

        services: [
            "Child health checkups",
            "Growth and development evaluation",
            "Pediatric consultation",
            "Child wellness care",
            "General pediatric services",
            "Preventive healthcare"
        ]
    },


    gynecology: {
        name: "Gynecology",
        shortName: "Women's Health",
        description:
            "Comprehensive healthcare focused on women's health.",
        image: "/images/services/gynecology.jpg",

        overview:
            "Gynecology provides healthcare focused on women's reproductive and overall health needs. Our services support women through different stages of life.",

        services: [
            "Women's health consultation",
            "Routine gynecological care",
            "Reproductive health consultation",
            "Women's wellness care",
            "Preventive health services",
            "Specialist consultation"
        ]
    },


    dermatology: {
        name: "Dermatology",
        shortName: "Skin Care",
        description:
            "Healthcare for skin, hair and nail conditions.",
        image: "/images/services/dermatology.jpg",

        overview:
            "Dermatology focuses on the health of the skin, hair and nails. Our services help patients access evaluation and care for a variety of dermatological concerns.",

        services: [
            "Skin consultation",
            "Skin condition evaluation",
            "Hair and scalp care",
            "Nail health evaluation",
            "General dermatology",
            "Preventive skin care"
        ]
    },


    "general-medicine": {
        name: "General Medicine",
        shortName: "Primary Care",
        description:
            "Everyday healthcare and medical consultations for adults.",
        image: "/images/services/general-medicine.jpg",

        overview:
            "General medicine provides comprehensive healthcare for common medical concerns and ongoing health needs. It can also help patients determine when specialist care may be appropriate.",

        services: [
            "General health consultation",
            "Routine health evaluation",
            "Preventive healthcare",
            "Common illness evaluation",
            "Health monitoring",
            "Primary care consultation"
        ]
    },


    urology: {
        name: "Urology",
        shortName: "Urological Care",
        description:
            "Specialized care for urinary and related health conditions.",
        image: "/images/services/urology.jpg",

        overview:
            "Urology focuses on the urinary system and related health concerns. Our services help patients access appropriate evaluation and specialist care.",

        services: [
            "Urology consultation",
            "Urinary health evaluation",
            "Kidney and bladder care",
            "Urological condition evaluation",
            "Preventive urological care",
            "Specialist consultation"
        ]
    },


    ent: {
        name: "ENT",
        shortName: "Ear, Nose & Throat",
        description:
            "Healthcare for ear, nose and throat conditions.",
        image: "/images/services/ent.jpg",

        overview:
            "ENT care focuses on conditions affecting the ear, nose, throat and related areas. Our services support evaluation and treatment of common ENT concerns.",

        services: [
            "Ear health evaluation",
            "Nose and sinus consultation",
            "Throat evaluation",
            "Hearing-related consultation",
            "ENT condition evaluation",
            "Specialist care"
        ]
    },


    "renal-care": {
        name: "Renal Care",
        shortName: "Kidney Health",
        description:
            "Specialized healthcare focused on kidney health.",
        image: "/images/services/renal-care.jpg",

        overview:
            "Renal care focuses on kidney health and related medical conditions. Our services help patients access appropriate evaluation, monitoring and specialist care.",

        services: [
            "Kidney health consultation",
            "Renal health evaluation",
            "Kidney condition assessment",
            "Blood pressure monitoring",
            "Preventive kidney care",
            "Specialist consultation"
        ]
    }

};


// Dynamic specialty route
app.get("/medical-services/:specialty", (req, res) => {

    const specialty =
        specialties[req.params.specialty];

    if (!specialty) {
        return res.status(404).send("Medical specialty not found");
    }

    res.render("pages/specialty", {
        specialty
    });

});


// =================================
// APPOINTMENT PAGE
// =================================

app.get("/appointment", (req, res) => {

    res.render("pages/appointment");

});


// =========================================================
// APPOINTMENT
// =========================================================

app.post("/appointment", async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            email,
            phone,
            specialty,
            doctor,
            date,
            time,
            message
        } = req.body;


        // =====================================================
        // EMAIL CONTENT
        // =====================================================

        const emailContent = `

            <div style="
                font-family: Arial, sans-serif;
                max-width: 650px;
                margin: auto;
                color: #365e64;
            ">

                <div style="
                    background: #075763;
                    padding: 25px;
                    text-align: center;
                    border-radius: 12px 12px 0 0;
                ">

                    <h2 style="
                        color: white;
                        margin: 0;
                    ">
                        CURE HEALTH 24
                    </h2>

                    <p style="
                        color: #c4e2e5;
                        margin: 8px 0 0;
                    ">
                        New Appointment Request
                    </p>

                </div>


                <div style="
                    padding: 30px;
                    border: 1px solid #dcecef;
                    border-top: none;
                    border-radius: 0 0 12px 12px;
                ">

                    <h3 style="
                        color: #075763;
                        margin-top: 0;
                    ">
                        Appointment Details
                    </h3>


                    <hr style="
                        border: none;
                        border-top: 1px solid #dcecef;
                    ">


                    <p>
                        <strong>Patient Name:</strong><br>
                        ${firstName} ${lastName}
                    </p>


                    <p>
                        <strong>Email:</strong><br>
                        ${email}
                    </p>


                    <p>
                        <strong>Phone:</strong><br>
                        ${phone}
                    </p>


                    <p>
                        <strong>Specialty:</strong><br>
                        ${specialty}
                    </p>


                    <p>
                        <strong>Preferred Doctor:</strong><br>
                        ${doctor || "Any available doctor"}
                    </p>


                    <p>
                        <strong>Preferred Date:</strong><br>
                        ${date}
                    </p>


                    <p>
                        <strong>Preferred Time:</strong><br>
                        ${time}
                    </p>


                    <p>
                        <strong>Reason for Visit:</strong><br>
                        ${message || "Not provided"}
                    </p>


                    <hr style="
                        border: none;
                        border-top: 1px solid #dcecef;
                        margin: 25px 0;
                    ">


                    <p style="
                        color: #71868a;
                        font-size: 13px;
                        line-height: 1.6;
                    ">
                        Please contact the patient regarding this
                        appointment request.
                    </p>

                </div>

            </div>

        `;


        // =====================================================
        // SEND EMAIL USING RESEND
        // =====================================================

        const { data, error } = await resend.emails.send({

            from: "CURE HEALTH 24 <info@curehealth24.com>",

            to: [
                "info@curehealth24.com"
            ],

            subject:
                `New Appointment - ${firstName} ${lastName}`,

            html: emailContent,

            replyTo: email

        });


        // =====================================================
        // RESEND ERROR
        // =====================================================

        if (error) {

            console.error("================================");
            console.error("RESEND ERROR");
            console.error("Message:", error.message);
            console.error("================================");

            throw new Error(error.message);
        }


        // =====================================================
        // SUCCESS LOG
        // =====================================================

        console.log("================================");
        console.log("APPOINTMENT EMAIL SENT");
        console.log("Resend ID:", data.id);
        console.log("Patient:", firstName, lastName);
        console.log("Email:", email);
        console.log("================================");


        // =====================================================
        // SUCCESS PAGE
        // =====================================================

        res.send(`

            <!DOCTYPE html>

            <html lang="en">

            <head>

                <meta charset="UTF-8">

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                >

                <title>
                    Appointment Received | CURE HEALTH
                </title>

            </head>


            <body>

                <div style="
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 100px 20px;
                    background: #f7fcfc;
                    min-height: 100vh;
                    box-sizing: border-box;
                ">

                    <div style="
                        max-width: 600px;
                        margin: auto;
                        background: white;
                        padding: 50px 30px;
                        border-radius: 20px;
                        box-shadow:
                            0 20px 50px
                            rgba(5, 70, 80, .08);
                    ">

                        <div style="
                            width: 60px;
                            height: 60px;
                            margin: 0 auto 20px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            background: #e4f8fa;
                            color: #075763;
                            font-size: 30px;
                        ">
                            ✓
                        </div>


                        <h1 style="
                            color: #075763;
                            margin-bottom: 15px;
                        ">
                            Appointment Request Received
                        </h1>


                        <p style="
                            color: #71868a;
                            line-height: 1.7;
                        ">
                            Thank you, ${firstName}.
                            Your appointment request has been
                            successfully submitted.
                        </p>


                        <p style="
                            color: #71868a;
                            line-height: 1.7;
                        ">
                            Our team will contact you shortly
                            to confirm your appointment.
                        </p>


                        <a
                            href="/"
                            style="
                                display: inline-block;
                                margin-top: 20px;
                                padding: 13px 24px;
                                background: #075763;
                                color: white;
                                text-decoration: none;
                                border-radius: 9px;
                                font-weight: 700;
                                font-size: 13px;
                            "
                        >
                            Back to Home
                        </a>

                    </div>

                </div>

            </body>

            </html>

        `);


    } catch (error) {

        // =====================================================
        // GENERAL ERROR
        // =====================================================

        console.error("================================");
        console.error("APPOINTMENT ERROR");
        console.error("Message:", error.message);
        console.error("================================");


        res.status(500).send(`

            <!DOCTYPE html>

            <html lang="en">

            <head>

                <meta charset="UTF-8">

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                >

                <title>
                    Appointment Error | CURE HEALTH
                </title>

            </head>


            <body>

                <div style="
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 100px 20px;
                    background: #f7fcfc;
                    min-height: 100vh;
                    box-sizing: border-box;
                ">

                    <div style="
                        max-width: 600px;
                        margin: auto;
                        background: white;
                        padding: 50px 30px;
                        border-radius: 20px;
                        box-shadow:
                            0 20px 50px
                            rgba(5, 70, 80, .08);
                    ">

                        <h1 style="
                            color: #075763;
                        ">
                            Something Went Wrong
                        </h1>


                        <p style="
                            color: #71868a;
                            line-height: 1.7;
                        ">
                            We couldn't process your appointment
                            request.
                        </p>


                        <a
                            href="/appointment"
                            style="
                                display: inline-block;
                                margin-top: 20px;
                                padding: 13px 24px;
                                background: #075763;
                                color: white;
                                text-decoration: none;
                                border-radius: 9px;
                                font-weight: 700;
                                font-size: 13px;
                            "
                        >
                            Try Again
                        </a>

                    </div>

                </div>

            </body>

            </html>

        `);

    }

});





// ==============================
// 404
// ==============================

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});


// ==============================
// START SERVER
// ==============================

app.listen(PORT, () => {
    console.log("🚀 Cure Health 24 Server Running");
    console.log(`👉 http://localhost:${PORT}`);
});