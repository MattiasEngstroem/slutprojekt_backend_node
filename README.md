# Ett API på kunskapsdomänen "serietidningar köpes/bytes/säljes"

## - bygger på en databas med serietidningar, användare, och objekt som olika användare söker eller äger

### Installation

- Öppna kommandotolken, ställ dig i en mapp där du vill lägga appen
- git clone https://github.com/MattiasEngstroem/slutprojekt_backend_node
- gå in i mappen slutprojekt_backend_node och skriv sedan:
  - npm i
  - npm run dev

### Endpoints:

- api/comics
  visa alla serietidningar
- api/comics/:id
  visa tidning med visst id
- api/comics/averageprice/:id
  visa genomsnittligt pris på en viss tidning
- api/comics/search?title={}&year={}
  sök på antingen serie eller titel och år
- api/users/:id
  visa användare med visst id
- api/users/matches
  visa matchningar mellan användare som söker en viss tidning och användare som äger den

#### Linkedin: https://www.linkedin.com/in/mattias-engstr%C3%B6m-4099a6326/
