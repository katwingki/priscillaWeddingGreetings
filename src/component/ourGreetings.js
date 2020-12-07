import React from 'react';
import Greeting from './Greeting';
import './greetings.css';
import '../App.css';

function ourGreetings() {
  return (
    <div className='cards'>
      <video src='/videos/RedVideo.mp4' autoPlay loop muted />
      <h1>
        我们送来的㊗️福<i class='fas fa-angle-double-right'></i>
        <i class='fas fa-angle-double-right'> </i>
        <i class='fas fa-hand-holding-heart fa-3x'></i>
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Greeting
              url='https://youtu.be/w_nr5151oVI'
              text='哥林多前書:13:4 愛是恆久忍耐，又有恩慈；愛是不嫉妒；愛是不自誇，不張狂，'
              label='爸爸妈妈的祝福'
            />
            <Greeting
              url='https://youtu.be/Ck68WeePUaE'
              text='哥林多前書:13:5 不作害羞的事，不求自己的益處，不輕易發怒，不計算人的惡。'
              label='外婆的祝福'
            />
            <Greeting
              url='https://youtu.be/Cqtn8Z5Xd_s'
              text='哥林多前書:13:6 不喜歡不義，只喜歡真理；'
              label='哥哥的祝福'
            />
          </ul>
          <h2>
            有人在基督裏,他就是新造的了,舊事已過,都變成新的了.
            原能與這段经文與你共享,無論以往的日子是怎樣的过都已成過去,不要再回頭望了,新嘅日子來臨就係一個新人,新嘅開始有新希望,但願日子過得充實同埋愉快。
          </h2>
          <ul className='cards__items'>
            <Greeting
              url='https://youtu.be/ohzCow2XhDg'
              text='哥林多前書:13:7 凡事包容，凡事相信，凡事盼望，凡事忍耐。'
              label='Pandola姨和Uncle Brian的祝福'
            />
            <Greeting
              url='https://youtu.be/PFf-rZA31l0'
              text='彼得前書4:9 你們要互相款待，不發怨言。'
              label='Auntie Tammy和Uncle Raymond的祝福'
            />
            <Greeting
              url='https://youtu.be/rmdeBFDyJk4'
              text='恭喜柔柔同佢先生永遠幸福快樂💞開開心心😍生活愉快💌🎊🌻'
              label='雄舅父舅母的祝福'
            />
          </ul>
          <ul className='cards__items'>
            <Greeting
              url='https://youtu.be/30bGqztJwn4'
              text='恭喜晒！祝柔柔和佢先生永遠幸福快樂，早生貴子🌻🌹🥂亦都恭喜雪梅和亞樸做外父，外母🎉🥳'
              label='Uncle Lawrence的祝福'
            />
            <Greeting
              url='https://youtu.be/HqPfmXbw6rI'
              text='哥林多前書:13:8 愛是永不止息。先知講道之能終必歸於無有，說方言之能終必停止，知識也終必歸於無有。'
              label='Matthew的祝福'
            />
            <Greeting
              url='https://youtu.be/tGeKOqNibfI'
              text='彼得前書4:8 最要緊的是彼此切實相愛，因為愛能遮掩許多的罪。'
              label='George的祝福'
            />
          </ul>

          <ul className='cards__items'>
            <Greeting
              url='https://youtu.be/71wnWjeLvP8'
              text=''
              label='琪琪的祝福'
            />
            <Greeting
              url='https://youtu.be/dtRH1O8FYxY'
              text=''
              label='Aiden的祝福'
            />
            <Greeting
              url='https://youtu.be/rbMRrExE0e8'
              text=''
              label='Aiden-All Of Me'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ourGreetings;
