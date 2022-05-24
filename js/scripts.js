const data = {
    komi: {
        compressedImages: ["1-min.png", "2-min.png", "3-min.png", "4-min.png"],
        name: "Komi-san wa, Komyushou desu.",
        description: "Tadano Hitohito is a normal highschool newcomer, aiming to not stand out. His wonderful plan quickly comes to a close as he befriends the school's madonna and promises to help her achieve her dream.",
        synopsis: ["Hitohito Tadano is an ordinary boy who heads into his first day of high school with a clear plan: to avoid trouble and do his best to blend in with others. Unfortunately, he fails right away when he takes the seat beside the school's madonna—Shouko Komi. His peers now recognize him as someone to eliminate for a chance to sit next to the most beautiful girl in class.",
            "Gorgeous and graceful with long, dark hair, Komi is universally adored and immensely popular despite her mysterious persona. However, unbeknownst to everyone, she has crippling anxiety and a communication disorder which prevents her from wholeheartedly socializing with her classmates.",
            "When left alone in the classroom, a chain of events forces Komi to interact with Tadano through writing on the blackboard, as if in a one-way conversation. Being the first person to realize she cannot communicate properly, Tadano picks up the chalk and begins to write as well. He eventually discovers that Komi's goal is to make one hundred friends during her time in high school. To this end, he decides to lend her a helping hand, thus also becoming her first-ever friend."]
    }, konosuba: {
        compressedImages: ["1-min.png", "2-min.png", "3-min.png", "4-min.png"],
        name: "Kono Subarashii Sekai ni Shukufuku wo!",
        description: "Satou Kazuma died a laughable death attempting to save a girl who didn't need any saving. As revenge for the humiliation a Goddess granted him, he ventures on a quest to save another world with one item by his side: the aforementioned goddess.",
        synopsis: ["After dying a laughable and pathetic death on his way back from buying a game, high school student and recluse Kazuma Satou finds himself sitting before a beautiful but obnoxious goddess named Aqua. She provides the NEET with two options: continue on to heaven or reincarnate in every gamer's dream—a real fantasy world!",
            "Choosing to start a new life, Kazuma is quickly tasked with defeating a Demon King who is terrorizing villages. But before he goes, he can choose one item of any kind to aid him in his quest, and the future hero selects Aqua. But Kazuma has made a grave mistake—Aqua is completely useless!",
            "Unfortunately, their troubles don't end here; it turns out that living in such a world is far different from how it plays out in a game. Instead of going on a thrilling adventure, the duo must first work to pay for their living expenses. Indeed, their misfortunes have only just begun!"]
    }, sakurasou: {
        compressedImages: ["1-min.png", "2-min.png", "3-min.png", "4-min.png"],
        name: "Sakurasou no Pet na Kanojo.",
        description: "Sorata Kanda was just about to move out of a dorm when he was asked to help a newcomer girl settle into that very dorm, only to discover that she can't even take care of herself. How will his new, troublesome life turn out now that he has to help her with most of the things she does.",
        synopsis: ["When abandoned kittens and his good conscience force second year Sorata Kanda to move into Suimei High School’s infamous Sakura Hall, the satellite dorm and its eccentric, misfit residents turn his life upside down. The decidedly average Sorata finds it difficult to fit in with the bizarre collection of dorm residents like Misaki, an energetic animator; Jin, a playwright playboy; Ryuunosuke, a reclusive programmer; and Chihiro, the dorm manager, art teacher, and party girl.",
        "Sorata's friend Nanami, a second year student and aspiring voice actress, pushes him to find new owners for the many cats so that he can quickly move back into the regular dorms. However, his desire to escape Sakura Hall wavers when the pet-like and infantile second year Mashiro Shiina, a world-class artistic savant looking to become a mangaka, transfers in during the spring trimester and quickly latches onto him.",
        "Supported by each other's quirks, Sorata and Mashiro come out of their shells and trigger change in the lives of those around them. Based on the light novel series of the same name, Sakurasou no Pet na Kanojo explores the fine threads connecting talent, hard work, romance, and friendship with its ensemble cast."]
    }, evangelion: {
        compressedImages: ["1-min.png", "2-min.png", "3-min.png", "4-min.png"],
        name: "Neon Genesis Evangelion",
        description: "Ever since his mother's sudden death in an incident known as The Second Impact, Shinji Ikari has lived alone, away from his father. After being contacted by his father, he returns, and is instantly ordered to pilot a robot he has never seen before.",
        synopsis: ["Fifteen years after a cataclysmic event known as the Second Impact, the world faces a new threat: monstrous celestial beings called \"Angels\" invade Tokyo-3 one by one. Mankind is unable to defend themselves against the Angels despite utilizing their most advanced munitions and military tactics. The only hope for human salvation rests in the hands of NERV, a mysterious organization led by the cold Gendou Ikari. NERV operates giant humanoid robots dubbed \"Evangelions\" to combat the Angels with state-of-the-art advanced weaponry and protective barriers known as Absolute Terror Fields.",
        "Years after being abandoned by his father, Shinji Ikari, Gendou's 14-year-old son, returns to Tokyo-3. Shinji undergoes a perpetual internal battle against the deeply buried trauma caused by the loss of his mother and the emotional neglect he suffered at the hands of his father. Terrified to open himself up to another, Shinji's life is forever changed upon meeting 29-year-old Misato Katsuragi, a high-ranking NERV officer who shows him a free-spirited maternal kindness he has never experienced.",
        "A devastating Angel attack forces Shinji into action as Gendou reveals his true motive for inviting his son back to Tokyo-3: Shinji is the only child capable of efficiently piloting Evangelion Unit-01, a new robot that synchronizes with his biometrics. Despite the brutal psychological trauma brought about by piloting an Evangelion, Shinji defends Tokyo-3 against the angelic threat, oblivious to his father's dark machinations."]
    }
}

let timer;

let currentCategory = 0;

let currentImage = 0;

function imageCarousel(category, startingNumber) {
    let url = "img/" + Object.keys(data)[category] + "/" + data[Object.keys(data)[category]].compressedImages[startingNumber];
    let compressedUrl = "img/" + Object.keys(data)[category] + "/" + data[Object.keys(data)[category]].compressedImages[startingNumber];
    $("#mainImg").css('background-image', "url(" + compressedUrl + ")");
    $("#buttonContainer").children().eq(1).children().eq(0).attr("href", url);
    let children = $("#imgMenu").children();
    for (let i = 1; i < children.length - 1; i++) {
        children[i].className = "imgMenuItem";
    }
    children[startingNumber + 1].className = "imgMenuItem imgMenuSelected";
    let nextNumber = (startingNumber + 1) % data[Object.keys(data)[category]].compressedImages.length;
    timer = setTimeout(() => {
        imageCarousel(category, nextNumber);
    }, 5000);
}

function nextImage() {
    currentImage = (currentImage + 1) % data[Object.keys(data)[currentCategory]].compressedImages.length;
    clearTimeout(timer);
    imageCarousel(currentCategory, currentImage);
}

function previousImage() {
    if (currentImage === 0) {
        currentImage = data[Object.keys(data)[currentCategory]].compressedImages.length - 1;
    } else {
        currentImage = (currentImage - 1) % data[Object.keys(data)[currentCategory]].compressedImages.length;
    }
    clearTimeout(timer);
    imageCarousel(currentCategory, currentImage)
}

function changeImage(image) {
    clearTimeout(timer);
    imageCarousel(currentCategory, image);
}

function changeCategory(category) {
    clearTimeout(timer);
    currentCategory = category;
    $("#imgTitle").text(data[Object.keys(data)[category]].name);
    $("#imgTag").text(data[Object.keys(data)[category]].description);
    $("#buttonContainer").children().eq(0).children().eq(0).attr("href", Object.keys(data)[category] + ".html")
    let children = document.getElementById("itemList").children
    for (let i = 0; i < children.length; i++) {
        children[i].className = "unselectedItem";
    }
    children[category].className = "selectedItem";
    imageCarousel(category, 0);
}

function nextCategory() {
    currentCategory = (currentCategory + 1) % Object.keys(data).length;
    changeCategory(currentCategory);
}

function previousCategory() {
    if (currentCategory === 0) {
        currentCategory = Object.keys(data).length - 1;
    } else {
        currentCategory = (currentCategory - 1) % Object.keys(data).length;
    }
    changeCategory(currentCategory)
}

function toggleMenu() {
    let x = document.getElementById("topNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function loadForm() {
    let sessiondata = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        dateOfBirth: document.getElementById("datepicker").value,
        color: document.getElementById("userColor").value,
        commentContent: document.getElementById("commentArea").value
    };
    if (document.getElementById("genderFemale").checked) {
        sessiondata.gender = 1;
    } else {
        sessiondata.gender = 0;
    }
    return sessiondata;
}

function setComment(partOfWebsite) {
    let sessiondata = loadForm();
    sessionStorage.setItem(partOfWebsite, JSON.stringify(sessiondata));
}

function loadComment(partOfWebsite) {
    if (sessionStorage.getItem(partOfWebsite)) {
        let sessiondata = JSON.parse(sessionStorage.getItem(partOfWebsite));
        document.getElementById("userName").value = sessiondata.name;
        document.getElementById("userEmail").value = sessiondata.email;
        document.getElementById("datepicker").value = sessiondata.dateOfBirth;
        document.getElementById("userColor").value = sessiondata.color;
        document.getElementById("commentArea").value = sessiondata.commentContent;
        if (sessiondata.gender === 1) {
            document.getElementById("genderFemale").checked = "checked";
        } else {
            document.getElementById("genderMale").checked = "checked";
        }
    }
}

function clearComments() {
    let localDiv = document.getElementById("commentsPlace");


    for (let i = localDiv.children.length - 1; i > 0; i--) {
        localDiv.removeChild(localDiv.children.item(i));
    }
}

function uploadComment(partOfWebsite) {
    let sessiondata = loadForm();
    let commentData = {
        comments: []
    };

    if (localStorage.getItem(partOfWebsite + "_com")) {
        commentData = JSON.parse(localStorage.getItem(partOfWebsite + "_com"));
    }

    commentData.comments.push(sessiondata);
    localStorage.setItem(partOfWebsite + "_com", JSON.stringify(commentData));
    clearComments();
    prepareComments(partOfWebsite);
}

function prepareComments(partOfWebsite) {
    if (localStorage.getItem(partOfWebsite + "_com")) {
        let commentData = JSON.parse(localStorage.getItem(partOfWebsite + "_com"));

        for (let i = 0; i < commentData.comments.length; i++) {
            let divData = document.getElementById("commentsPlace");
            let divChildren = divData.children;

            let commentElement = document.createElement("div");
            commentElement.className = "commentUnitSection";
            let commentInside = document.createElement("div");
            commentInside.className = "commentInside";
            let firstLine = document.createElement("div");
            let secondLine = document.createElement("div");
            let commentContent = document.createElement("div");
            let commentName = document.createElement("div");
            let commentGender = document.createElement("div");
            let commentMail = document.createElement("div");
            let commentDate = document.createElement("div");
            commentName.innerText = commentData.comments[i].name;
            if (commentData.comments[i].gender === 1) {
                commentGender.innerText = "Female";
            } else {
                commentGender.innerText = "Male";
            }
            commentMail.innerText = commentData.comments[i].email;
            commentDate.innerText = commentData.comments[i].dateOfBirth;
            commentContent.innerText = commentData.comments[i].commentContent;
            firstLine.className = "commentLine";
            secondLine.className = "commentLine";
            commentName.className = "commentName";
            commentGender.className = "commentGender";
            commentMail.className = "commentMail";
            commentDate.className = "commentDate";
            commentContent.className = "commentLargeContent";
            firstLine.appendChild(commentName);
            firstLine.appendChild(commentGender);
            secondLine.appendChild(commentMail);
            secondLine.appendChild(commentDate);
            commentInside.style.borderColor = commentData.comments[i].color;
            commentInside.appendChild(firstLine);
            commentInside.appendChild(secondLine);
            commentInside.appendChild(commentContent);
            commentElement.appendChild(commentInside);
            let done = false;
            for (let j = 0; j < divChildren.length; j++) {
                if (divChildren.item(j).children.length < 2) {
                    divChildren.item(j).appendChild(commentElement);
                    done = true;
                }
            }
            if (!done) {
                let newSection = document.createElement("div");
                newSection.className = "section";
                newSection.appendChild(commentElement);
                divData.appendChild(newSection);
            }
        }
    }
}

let enabledGallery = true;

let enabledDescription = true;

function toggleGallery(name) {
    let mainthing = document.getElementById("gallerySection");
    if (enabledGallery) {
        Array.from(mainthing.childNodes).filter(el => el.className === "section").forEach(el => {
            el.parentNode.removeChild(el);
        })
        enabledGallery = false;
        mainthing.children.item(0).className = "subtitle funnyHover deactivated";
    } else {
        enabledGallery = true;
        for (let i = 1; i < 10; i+=2) {
            let section = document.createElement("div");
            let firstSection = document.createElement("div");
            let secondSection = document.createElement("div");
            let firstA = document.createElement("a");
            let secondA = document.createElement("a");
            let firstImg = document.createElement("img");
            let secondImg = document.createElement("img");
            firstImg.setAttribute("src", "img/" + name + "/" + i + "-min.png");
            secondImg.setAttribute("src", "img/" + name + "/" + (i + 1) + "-min.png");
            firstImg.setAttribute("alt", "test");
            secondImg.setAttribute("alt", "test");
            firstImg.className = "secimg";
            secondImg.className = "secimg";
            firstA.setAttribute("href", "img/" + name + "/" + i + "-min.png");
            secondA.setAttribute("href", "img/" + name + "/" + (i + 1) + "-min.png");
            firstSection.className = "imgsection";
            secondSection.className = "imgsection";
            section.className = "section";
            firstA.appendChild(firstImg);
            secondA.appendChild(secondImg);
            firstSection.appendChild(firstA);
            secondSection.appendChild(secondA);
            section.appendChild(firstSection);
            section.appendChild(secondSection);
            mainthing.appendChild(section);
        }
        mainthing.children.item(0).className = "subtitle funnyHover";
    }

}

function toggleDescription(name) {
    let mainthing = document.getElementById("firstContent");
    if (enabledDescription) {
        Array.from(mainthing.childNodes).filter(el => (el.className !== "secinv")).forEach(el => {
            el.parentNode.removeChild(el);
        })
        enabledDescription = false;
        mainthing.children.item(0).children.item(0).className = "funnyHover deactivated"
    } else {
        enabledDescription = true;
        for (let i = 1; i < 4; i++) {
            let placeholder = document.createElement("div");
            placeholder.className = "placeholderPlace";
            let section = document.createElement("div");
            let imgSection = document.createElement("div");
            let textSection = document.createElement("div");
            let secDes = document.createElement("div");
            let aLink = document.createElement("a");
            let img = document.createElement("img");
            secDes.innerText = data[name].synopsis[i - 1];
            img.setAttribute("src", "img/" + name + "/" + i + "-min.png");
            img.setAttribute("alt", "test");
            img.className = "secimg";
            aLink.setAttribute("href", "img/" + name + "/" + i + "-min.png");
            secDes.className = "secdes";
            textSection.className = "textsection";
            imgSection.className = "imgsection";
            section.className = "section";
            aLink.append(img);
            if (i === 1) {
                let secTitle = document.createElement("div");
                secTitle.className = "sectitle";
                secTitle.innerText = "Plot";
                textSection.appendChild(secTitle);
            }
            textSection.appendChild(secDes);
            imgSection.appendChild(aLink);
            if (i%2===0) {
                section.appendChild(textSection);
                section.appendChild(imgSection);
            } else {
                section.appendChild(imgSection);
                section.appendChild(textSection);
            }
            mainthing.appendChild(placeholder);
            mainthing.appendChild(section);
        }
        mainthing.children.item(0).children.item(0).className = "funnyHover"
    }
}
