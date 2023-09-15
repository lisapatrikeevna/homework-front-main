import { useState } from 'react';
import s from './HW4.module.css';
import { Button } from './Button';
import { Input } from './Input';

export const HW4 = () => {
  // 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
  // - прописать типизацию, где необходимо
  // - починить все, что горит красным
  // - дописать функциональность (где указано комментариями)
  // - приложение должно компилироваться и запускаться в браузере

  const [currentText, setCurrentText] = useState<string>('');
  const [texts, setTexts] = useState<string[]>([
    'То, что вы делаете по ночам, то и делает вас богатым. (Аль Капоне)',
  ]);

  const handleSave = () => {
    setTexts([currentText, ...texts]);
    setCurrentText('');
  };

  return (
    <div id={'hw04'}>
      {currentText ? (
        <h1 id={'hw04-text'}>{currentText}</h1>
      ) : (
        <h1 id={'hw04-default-text'}>Здесь появится новое дело</h1>
      )}

      <Input currentText={currentText} setCurrentText={setCurrentText}/>

      <Button  name={'save'} callBack={handleSave} />

      <h1 style={{ marginTop: '50px' }}>СПИСОК ДЕЛ НА ДЕНЬ:</h1>

      <ol id={'hw04-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw04-task-${index}`} className={index ? s.chetNechet : ''}>
              {el}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

