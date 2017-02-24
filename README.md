# OOP_10.5

Zadanie: Użycie "self"

1. Napisz funkcję konstruującą Button, która będzie tworzyła nowe przyciski

2. Kolejnym krokiem będzie uzupełnienie konstruktora o parametr text, za pomocą którego ustawimy początkową wartość dla text w nowych obiektach.

3. Dodajmy możliwość tworzenia obiektu bez podania argumentu, w takim przypadku domyślną wartością właściwości text przycisków będzie ‘Hello’.

4. Ddodanie metody obsługującej tworzenie przycisku na stronie - dodajmy ją jako prototyp.

5. Następnie ustaw (również za pomocą jQuery) tekst na przycisku za pomocą metody text.

6. Kolejnym krokiem będzie napisanie metody, która po kliknięciu w przycisk wyświetli tekst na ekranie komputera. (uzyj zmienna self)

7. Na koniec należy umieścić element w drzewie DOM!

8. Kolejny krok to tworzenie pierwszej instancji:

   var btn1 = new Button(‘Hello!’);
   
9. Następnie wywołajmy metodę create w celu stworzenia elementu

10. Po stworzeniu instancji oraz użyciu metody create na stronie powinniśmy zobaczyć przycisk z treścią ‘Hello!’. 