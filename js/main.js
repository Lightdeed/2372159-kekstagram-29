//4.16. Больше деталей

/*
Обратите внимание, в тексте задания вы будете встречать текст в фигурных скобках. Такой текст будет означать, что на месте этого текста должно появиться значение, которое вы возьмёте из данных. Например, в шаблоне может быть написано <div>{{x}}</div>, и это будет значить, что {{x}} нужно заменить на значение переменной x. Если переменная будет равна 100, то разметка должна выглядеть как <div>100</div>. Фигурные скобки в этой записи ничего не значат, они просто показывают, что закончилась разметка и в этом месте будут стоять данные. Сами фигурные скобки переносить в разметку не нужно.
*/
//раздел package.json->scripts->
//nmp run start (npm start) (ctrl+c - stop)

import { generatePhotos } from './generatePhotos.js';


function main() {
  generatePhotos();
}

main();
