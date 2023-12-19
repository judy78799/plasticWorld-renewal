    // 섹션 박스 왔다갔다 움직임
    const boxes = document.querySelectorAll('.box');
    const boxes2 = document.querySelectorAll('.box2');
    window.addEventListener('scroll',checkBoxes);
    
    checkBoxes();
    
    function checkBoxes() {
        console.log(window.innerHeight);
        const triggerBottom= window.innerHeight/5*4;
    
        boxes.forEach((box) => {
            //박스 각각의 요소의 현재 높이를 알아냄
            const boxTop = box.getBoundingClientRect().top;
    
            if (boxTop < triggerBottom) {
                box.classList.add('show');
            } else{
                box.classList.remove('show');
            }
        })
    
        /*boxes2.forEach((box) => {
            //박스 각각의 요소의 현재 높이를 알아냄
            const boxTop = box.getBoundingClientRect().top;
    
            if (boxTop < triggerBottom) {
                box.classList.add('show2');
            } else{
                box.classList.remove('show2');
            }
        })*/
    }



    //마우스를 움직였을 때, : 거북이
    //애니메이션 변수 선언 .card, .container
    const card2 = document.querySelector('.card');
    const container2 = document.querySelector('.container');
    
    //Moving Animation event
    container2.addEventListener('mousemove',(e) => {
    // console.log(e.pageX,e.pageY)
    let xAxis= (window.innerWidth/2-e.pageX)/50;
    let yAxis= (window.innerHeight/2-e.pageY)/-180;
    card2.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    //마우스가 container영역 안에 들어갔을 때, 움직임에 따라 오브젝트가 회전합니다.
    container2.addEventListener('mouseenter',(e)=>{
    card2.style.transition="none";
    });
    //마우스가 container영역 밖으로 나갔을 때, 자연스럽게 회전을 멈춥니다.
    container2.addEventListener('mouseleave',(e)=>{
    card2.style.transition="all 0.5s ease";
    card2.style.transform=`rotateY(0deg) rotateX(0deg)`;
    });
    