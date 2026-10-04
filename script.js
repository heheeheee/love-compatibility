/*
    사랑 궁합 테스트 v2

    재미를 위한 알고리즘입니다.
*/


// --------------------------------
// 이름을 숫자로 변환
// --------------------------------

function stringToNumber(text) {

    let total = 0;

    for (let i = 0; i < text.length; i++) {

        total +=
            text.charCodeAt(i) *
            (i + 1);
    }

    return total;
}


// --------------------------------
// 생년월일을 숫자로 변환
// --------------------------------

function dateToNumber(date) {

    const numbers =
        date.replace(/-/g, "");

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {

        total +=
            Number(numbers[i]) *
            (i + 1);
    }

    return total;
}


// --------------------------------
// 기본 숫자 생성
// --------------------------------

function baseValue(
    name1,
    birth1,
    name2,
    birth2
) {

    const value1 =
        stringToNumber(name1) +
        dateToNumber(birth1);

    const value2 =
        stringToNumber(name2) +
        dateToNumber(birth2);

    return Math.abs(
        value1 * 31 +
        value2 * 17
    );
}


// --------------------------------
// 각 스탯 계산
// --------------------------------

function createStat(
    name1,
    birth1,
    name2,
    birth2,
    offset
) {

    const base =
        baseValue(
            name1,
            birth1,
            name2,
            birth2
        );

    const variation =
        (base + offset) % 41;

    let score =
        60 + variation;

    return Math.min(score, 100);
}


// --------------------------------
// 스탯별 상세 설명
// --------------------------------

function getStatDescription(
    type,
    score
) {

    // 💗 설렘
    if (type === "love") {

        if (score >= 95)
            return "서로에게 느끼는 호감과 끌림의 강도가 매우 높은 조합입니다. 함께 있을 때 상대방의 작은 행동이나 말에도 자연스럽게 관심이 생길 가능성이 높습니다. 단순한 첫인상의 호감을 넘어, 상대방을 더 알고 싶다는 감정으로 발전하기 좋은 관계입니다.";

        if (score >= 90)
            return "서로에게 매력을 느끼기 쉬운 관계입니다. 상대방의 분위기나 말투, 행동에서 호감을 발견할 가능성이 높으며, 처음보다 알아갈수록 관심이 커질 수 있습니다. 관계가 자연스럽게 가까워지면서 설렘도 함께 커지는 유형입니다.";

        if (score >= 80)
            return "강렬하게 시작하기보다는 자연스럽게 가까워지면서 서로의 매력을 발견하는 조합입니다. 처음에는 편안한 느낌으로 시작하더라도 함께하는 시간이 늘어날수록 상대방의 장점이 더욱 눈에 들어올 수 있습니다.";

        if (score >= 70)
            return "첫인상에서 강한 감정이 나타나기보다는 서로를 알아가는 과정에서 호감이 점차 커지는 유형입니다. 상대방의 성격이나 행동을 충분히 경험할수록 처음에는 보이지 않았던 매력이 드러날 가능성이 높습니다.";

        if (score >= 60)
            return "현재 관계에서는 강한 설렘보다는 편안함과 익숙함이 더 크게 느껴질 수 있습니다. 서로에게 호감이 있더라도 감정을 표현하는 속도에 차이가 생길 수 있기 때문에 상대방의 반응을 너무 빠르게 판단하지 않는 것이 좋습니다.";

        return "서로에게 호감이 형성되기까지 비교적 시간이 필요한 조합입니다. 처음부터 강한 감정이 나타나기보다는 대화와 경험이 쌓이면서 상대방의 매력을 발견하는 흐름에 가깝습니다. 충분히 알아가는 과정 자체가 중요한 관계입니다.";
    }


    // 💬 대화
    if (type === "talk") {

        if (score >= 95)
            return "대화의 흐름과 사고방식이 매우 자연스럽게 맞는 조합입니다. 하나의 주제에서 다양한 이야기로 쉽게 이어질 수 있으며, 서로의 말을 이해하는 속도도 빠른 편입니다. 의견이 달라지는 상황에서도 감정적으로 충돌하기보다는 서로의 관점을 받아들이며 대화를 이어갈 가능성이 높습니다.";

        if (score >= 90)
            return "서로의 생각을 대화를 통해 이해하기 좋은 관계입니다. 관심사가 잘 맞는 편이고 상대방의 반응을 살피면서 자연스럽게 대화의 방향을 조절할 수 있습니다. 어색한 상황에서도 비교적 빠르게 분위기를 회복할 수 있는 조합입니다.";

        if (score >= 80)
            return "일상적인 대화에서 상당한 편안함을 느낄 수 있는 관계입니다. 서로의 이야기를 듣고 반응하는 방식이 비교적 잘 맞으며, 관심사가 완전히 같지 않더라도 대화를 이어가는 데 큰 어려움이 없습니다. 시간이 지날수록 더욱 깊은 이야기를 나누기 좋은 조합입니다.";

        if (score >= 70)
            return "기본적인 의사소통은 원활하지만 서로의 표현 방식에는 어느 정도 차이가 있을 수 있습니다. 한쪽은 직접적으로 표현하는 반면 다른 쪽은 자신의 생각을 돌려서 전달하는 식의 차이가 나타날 수 있습니다. 이러한 차이를 이해하면 대화의 만족도가 더욱 높아질 수 있습니다.";

        if (score >= 60)
            return "대화의 내용보다 서로가 말을 받아들이는 방식에서 차이가 나타날 가능성이 있습니다. 같은 말을 듣더라도 서로 다른 의미로 받아들일 수 있기 때문에 중요한 이야기를 할 때는 자신의 의도를 최대한 정확하게 전달하는 것이 관계에 도움이 됩니다.";

        return "의사소통 방식에서 비교적 큰 차이가 나타날 수 있는 조합입니다. 한쪽에서는 가볍게 한 말이 다른 쪽에서는 중요하게 받아들여질 가능성도 있습니다. 상대방의 의도를 혼자 판단하기보다는 직접 확인하고 충분히 대화하는 것이 중요한 관계입니다.";
    }


    // 🤝 신뢰
    if (type === "trust") {

        if (score >= 95)
            return "관계의 안정성과 신뢰 형성 측면에서 매우 높은 조화를 보이는 조합입니다. 서로의 약속과 개인적인 영역을 존중하는 경향이 강하며, 문제가 생겼을 때 상대방을 쉽게 의심하기보다 상황을 함께 해결하려는 방향으로 움직일 가능성이 높습니다.";

        if (score >= 90)
            return "서로에게 안정감을 주고받기 좋은 관계입니다. 상대방의 행동을 비교적 긍정적으로 해석하는 편이기 때문에 불필요한 오해가 크게 쌓이지 않을 가능성이 높습니다. 작은 약속을 지키는 경험이 반복될수록 두 사람 사이의 신뢰가 더욱 단단해질 수 있습니다.";

        if (score >= 80)
            return "기본적인 신뢰를 형성하기에 좋은 조건을 가지고 있습니다. 처음부터 모든 것을 공유하기보다는 함께한 경험이 쌓이면서 자연스럽게 믿음이 깊어지는 유형입니다. 서로의 사생활과 개인적인 영역을 존중한다면 안정적인 관계를 만들어가기 좋습니다.";

        if (score >= 70)
            return "신뢰를 형성하는 데 특별한 어려움은 없지만 서로에게 익숙해지는 시간이 어느 정도 필요할 수 있습니다. 상대방의 행동을 한 번의 상황만으로 판단하기보다는 지속적으로 보여주는 태도를 살펴보는 것이 중요합니다.";

        if (score >= 60)
            return "서로를 완전히 믿기까지 어느 정도 시간이 필요한 조합입니다. 작은 오해가 생겼을 때 이를 바로 풀지 않으면 불필요한 거리감으로 이어질 수 있습니다. 상대방의 마음을 추측하기보다는 직접 확인하고 대화하는 것이 관계의 안정성을 높이는 데 도움이 됩니다.";

        return "신뢰를 쌓는 과정에서 조금 더 세심한 노력이 필요한 관계입니다. 서로가 기대하는 행동이나 관계의 기준이 다를 수 있기 때문에 한쪽에서는 당연하게 생각하는 행동이 다른 쪽에서는 다르게 받아들여질 가능성이 있습니다. 꾸준한 소통과 일관된 행동이 장기적인 신뢰 형성에 중요합니다.";
    }


    // ⚡ 케미
    if (type === "chemistry") {

        if (score >= 95)
            return "두 사람의 성향이 서로를 강하게 보완하는 조합입니다. 비슷한 부분에서는 빠르게 공감대를 형성하고, 다른 부분에서는 서로에게 새로운 관점과 자극을 제공할 가능성이 높습니다. 함께 있을 때 자연스럽게 분위기가 만들어지는 것이 이 조합의 가장 큰 특징입니다.";

        if (score >= 90)
            return "성격과 행동 방식의 조화가 뛰어난 편입니다. 서로의 장점을 자연스럽게 끌어내는 효과가 있으며, 함께 활동하거나 이야기를 나눌 때 분위기가 쉽게 살아날 가능성이 높습니다. 지나치게 비슷하지 않으면서도 서로를 이해할 수 있는 균형이 좋은 조합입니다.";

        if (score >= 80)
            return "두 사람의 성향에는 서로 잘 맞는 부분이 상당히 많습니다. 취향이나 행동 방식이 완전히 같지는 않지만 오히려 이러한 차이가 관계에 다양한 재미를 더해줄 수 있습니다. 서로의 개성을 인정할수록 더욱 좋은 케미를 만들어갈 수 있는 조합입니다.";

        if (score >= 70)
            return "전반적인 성향은 무난하게 어울리는 편이지만 특정 상황에서는 서로의 차이가 드러날 수 있습니다. 한쪽은 빠르게 결정하려는 반면 다른 쪽은 충분히 생각한 뒤 움직이려는 모습이 나타날 수 있습니다. 이러한 차이를 서로의 부족한 부분을 보완하는 요소로 활용하면 좋은 관계가 될 수 있습니다.";

        if (score >= 60)
            return "두 사람은 성격이나 행동 방식에서 서로 다른 특징을 가지고 있을 가능성이 높습니다. 처음에는 이러한 차이가 다소 어색하게 느껴질 수 있지만, 서로의 방식을 존중한다면 오히려 새로운 경험과 관점을 얻을 수 있는 관계가 될 수 있습니다.";

        return "성향의 차이가 비교적 뚜렷한 조합입니다. 같은 상황에서도 서로 다른 선택을 하거나 감정을 표현하는 방식이 다를 수 있습니다. 이러한 차이를 억지로 없애기보다는 각자의 특징을 인정하고 서로에게 맞는 방식을 찾아가는 것이 관계의 균형을 잡는 데 중요합니다.";
    }
}


// --------------------------------
// 전체 결과 문구
// --------------------------------

function getResult(score) {

    if (score >= 95) {

        return {
            title: "💖 운명적인 케미",
            description:
                "네 가지 핵심 지표에서 모두 높은 조화를 보이는 매우 뛰어난 조합입니다. 서로에게 느끼는 호감뿐만 아니라 대화 방식과 신뢰 형성, 성향의 조화까지 전반적으로 안정적인 모습을 보입니다. 함께하는 시간이 자연스럽게 편안하면서도 서로에게 긍정적인 자극을 줄 가능성이 높은 관계입니다."
        };

    } else if (score >= 90) {

        return {
            title: "💕 운명적인 궁합",
            description:
                "두 사람 사이에는 강한 호감과 높은 수준의 정서적 조화가 나타납니다. 서로의 장점을 발견하기 쉽고 대화를 통해 관계가 빠르게 가까워질 가능성이 있습니다. 작은 차이가 존재하더라도 전체적인 균형이 좋아 서로에게 긍정적인 영향을 주기 좋은 조합입니다."
        };

    } else if (score >= 80) {

        return {
            title: "💗 최고의 궁합",
            description:
                "서로 다른 부분과 잘 맞는 부분의 균형이 좋은 관계입니다. 대화와 신뢰를 바탕으로 자연스럽게 가까워질 가능성이 높으며, 함께하는 시간이 늘어날수록 서로의 매력을 발견하기 쉬운 조합입니다. 관계를 꾸준히 이어갈수록 더욱 깊은 친밀감을 형성할 가능성이 있습니다."
        };

    } else if (score >= 70) {

        return {
            title: "😊 좋은 궁합",
            description:
                "전반적인 관계의 흐름이 안정적인 편입니다. 서로의 성향이 완전히 같지는 않지만 일상적인 대화와 교류에서 충분한 공통점을 찾을 수 있습니다. 상대방의 차이를 자신의 기준으로 판단하지 않고 존중한다면 편안하고 지속적인 관계로 발전할 가능성이 있습니다."
        };

    } else if (score >= 60) {

        return {
            title: "🙂 괜찮은 궁합",
            description:
                "두 사람 사이에는 분명 잘 맞는 요소가 있지만 관계의 모든 부분이 자연스럽게 일치하는 것은 아닙니다. 특히 서로의 표현 방식이나 관계를 받아들이는 속도에서 차이가 나타날 수 있습니다. 이러한 차이를 이해하고 조율하는 과정이 쌓이면 충분히 안정적인 관계를 만들어갈 수 있습니다."
        };

    } else if (score >= 50) {

        return {
            title: "🤔 알아가는 중",
            description:
                "현재 단계에서는 두 사람의 성향이 잘 맞는 부분과 그렇지 않은 부분이 함께 나타나는 조합입니다. 아직 서로의 행동이나 생각을 충분히 이해하지 못했을 가능성도 있습니다. 지금의 결과만으로 관계의 가능성을 판단하기보다는 서로에 대해 알아가는 과정에서 새로운 모습을 발견하는 것이 중요한 관계입니다."
        };

    } else {

        return {
            title: "🌱 서로 이해가 필요한 사이",
            description:
                "두 사람 사이에는 성향과 의사소통 방식에서 비교적 큰 차이가 나타날 수 있습니다. 같은 상황을 서로 다른 관점에서 바라볼 가능성이 있기 때문에 자연스럽게 오해가 생길 수도 있습니다. 하지만 이러한 차이가 반드시 부정적인 요소인 것은 아니며, 서로의 기준을 이해하고 존중한다면 오히려 부족한 부분을 보완하는 관계가 될 수 있습니다."
        };
    }
}


// --------------------------------
// 궁합 계산
// --------------------------------

function calculateCompatibility() {

    const name1 =
        document
            .getElementById("name1")
            .value
            .trim();

    const name2 =
        document
            .getElementById("name2")
            .value
            .trim();

    const birth1 =
        document
            .getElementById("birth1")
            .value;

    const birth2 =
        document
            .getElementById("birth2")
            .value;


    // 입력 확인

    if (
        name1 === "" ||
        name2 === ""
    ) {

        alert(
            "두 사람의 이름을 모두 입력해주세요."
        );

        return;
    }


    if (
        birth1 === "" ||
        birth2 === ""
    ) {

        alert(
            "두 사람의 생년월일을 모두 입력해주세요."
        );

        return;
    }


    // 스탯 생성

    const loveScore =
        createStat(
            name1,
            birth1,
            name2,
            birth2,
            137
        );

    const talkScore =
        createStat(
            name1,
            birth1,
            name2,
            birth2,
            521
        );

    const trustScore =
        createStat(
            name1,
            birth1,
            name2,
            birth2,
            843
        );

    const chemistryScore =
        createStat(
            name1,
            birth1,
            name2,
            birth2,
            276
        );


    // 평균

    const totalScore =
        Math.round(
            (
                loveScore +
                talkScore +
                trustScore +
                chemistryScore
            ) / 4
        );


    // 결과

    const result =
        getResult(totalScore);


    // 이름

    document
        .getElementById("couple-name")
        .textContent =
        `${name1} ♥ ${name2}`;


    // 전체 점수

    document
        .getElementById("score")
        .textContent =
        totalScore;

    document
        .getElementById("average-score")
        .textContent =
        totalScore;


    // 제목

    document
        .getElementById("result-title")
        .textContent =
        result.title;


    document
        .getElementById("result-description")
        .textContent =
        result.description;


    // 스탯 숫자

    document
        .getElementById("love-score")
        .textContent =
        loveScore;

    document
        .getElementById("talk-score")
        .textContent =
        talkScore;

    document
        .getElementById("trust-score")
        .textContent =
        trustScore;

    document
        .getElementById("chemistry-score")
        .textContent =
        chemistryScore;


    // 스탯 설명

    document
        .getElementById("love-description")
        .textContent =
        getStatDescription(
            "love",
            loveScore
        );

    document
        .getElementById("talk-description")
        .textContent =
        getStatDescription(
            "talk",
            talkScore
        );

    document
        .getElementById("trust-description")
        .textContent =
        getStatDescription(
            "trust",
            trustScore
        );

    document
        .getElementById("chemistry-description")
        .textContent =
        getStatDescription(
            "chemistry",
            chemistryScore
        );


    // 막대 그래프

    document
        .getElementById("love-bar")
        .style.width =
        loveScore + "%";

    document
        .getElementById("talk-bar")
        .style.width =
        talkScore + "%";

    document
        .getElementById("trust-bar")
        .style.width =
        trustScore + "%";

    document
        .getElementById("chemistry-bar")
        .style.width =
        chemistryScore + "%";


    // 하트 채우기

    const heartFill =
        document.getElementById("heart-fill");

    const heartHeight =
        totalScore * 1.8;

    const heartY =
        180 - heartHeight;

    heartFill.setAttribute(
        "y",
        heartY
    );

    heartFill.setAttribute(
        "height",
        heartHeight
    );


    // 화면 전환

    document
        .getElementById("input-section")
        .classList
        .add("hidden");

    document
        .getElementById("result-section")
        .classList
        .remove("hidden");


    // 화면 위로

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// --------------------------------
// 다시 테스트
// --------------------------------

function restartTest() {

    document
        .getElementById("result-section")
        .classList
        .add("hidden");

    document
        .getElementById("input-section")
        .classList
        .remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// --------------------------------
// 궁합 결과 공유
// --------------------------------

async function shareResult() {

    const coupleName =
        document.getElementById("couple-name").textContent;

    const score =
        document.getElementById("score").textContent;

    const resultTitle =
        document.getElementById("result-title").textContent;

    const resultDescription =
        document.getElementById("result-description").textContent;

    const loveScore =
        document.getElementById("love-score").textContent;

    const talkScore =
        document.getElementById("talk-score").textContent;

    const trustScore =
        document.getElementById("trust-score").textContent;

    const chemistryScore =
        document.getElementById("chemistry-score").textContent;


    // 결과를 URL에 저장
    const params = new URLSearchParams();

    params.set("shared", "true");
    params.set("couple", coupleName);
    params.set("score", score);
    params.set("title", resultTitle);
    params.set("description", resultDescription);

    params.set("love", loveScore);
    params.set("talk", talkScore);
    params.set("trust", trustScore);
    params.set("chemistry", chemistryScore);


    const shareUrl =
        window.location.origin +
        window.location.pathname +
        "?" +
        params.toString();


    const shareText =
        `${coupleName}

💕 사랑 궁합 테스트 결과

궁합 점수 : ${score}점
${resultTitle}

${resultDescription}

나도 궁합 테스트 해보기 👇`;


    // 모바일 공유
    if (navigator.share) {

        try {

            await navigator.share({
                title: "사랑 궁합 테스트 결과",
                text: shareText,
                url: shareUrl
            });

        } catch (error) {

            if (error.name !== "AbortError") {
                console.log("공유에 실패했습니다.", error);
            }
        }

    } else {

        // PC에서는 링크 복사
        try {

            await navigator.clipboard.writeText(
                shareText + "\n\n" + shareUrl
            );

            alert(
                "궁합 결과 링크가 복사되었습니다!\n친구에게 보내보세요."
            );

        } catch (error) {

            alert(
                "공유 링크를 복사할 수 없습니다."
            );
        }
    }
}
// --------------------------------
// 공유된 궁합 결과 불러오기
// --------------------------------

function loadSharedResult() {

    const params =
        new URLSearchParams(window.location.search);

    if (params.get("shared") !== "true") {
        return;
    }


    const coupleName =
        params.get("couple");

    const score =
        params.get("score");

    const resultTitle =
        params.get("title");

    const resultDescription =
        params.get("description");

    const loveScore =
        params.get("love");

    const talkScore =
        params.get("talk");

    const trustScore =
        params.get("trust");

    const chemistryScore =
        params.get("chemistry");


    // 결과 표시

    document.getElementById("couple-name").textContent =
        coupleName;

    document.getElementById("score").textContent =
        score;

    document.getElementById("average-score").textContent =
        score;

    document.getElementById("result-title").textContent =
        resultTitle;

    document.getElementById("result-description").textContent =
        resultDescription;


    // 스탯

    document.getElementById("love-score").textContent =
        loveScore;

    document.getElementById("talk-score").textContent =
        talkScore;

    document.getElementById("trust-score").textContent =
        trustScore;

    document.getElementById("chemistry-score").textContent =
        chemistryScore;


    // 막대 그래프

    document.getElementById("love-bar").style.width =
        loveScore + "%";

    document.getElementById("talk-bar").style.width =
        talkScore + "%";

    document.getElementById("trust-bar").style.width =
        trustScore + "%";

    document.getElementById("chemistry-bar").style.width =
        chemistryScore + "%";


    // 하트 채우기

    const heartFill =
        document.getElementById("heart-fill");

    const heartHeight =
        Number(score) * 1.8;

    const heartY =
        180 - heartHeight;

    heartFill.setAttribute(
        "y",
        heartY
    );

    heartFill.setAttribute(
        "height",
        heartHeight
    );


    // 테스트 화면 숨기기

    document
        .getElementById("input-section")
        .classList
        .add("hidden");


    // 결과 화면 보여주기

    document
        .getElementById("result-section")
        .classList
        .remove("hidden");
}


// --------------------------------
// 페이지가 열릴 때 공유 결과 확인
// --------------------------------

window.addEventListener(
    "DOMContentLoaded",
    loadSharedResult
);