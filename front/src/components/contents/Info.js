import React, { Component } from "react";
import "./Info.css";

export default class Info extends Component {
  render() {
    return (
      <div>
        <div className="infomain">
          <h1>A brief history of haikus</h1>
        </div>
        <div className="haikuinfo">
          <p>
            <strong>Haiku</strong>, unrhymed poetic form consisting of 17 syllables arranged in
            three lines of 5, 7, and 5 syllables respectively. The haiku first
            emerged in Japanese literature during the 17th century, as a terse
            reaction to elaborate poetic traditions, though it did not become
            known by the name haiku until the 19th century.
            <br></br><br></br>
            The term <i>haiku</i> is derived from the first element of the word <i>haikai</i> 
            (a humorous form of <i>renga</i>, or linked-verse poem) and the second
            element of the word hokku (the initial stanza of a <i>renga</i>).
            The hokku, which set the tone of a <i>renga</i>, had to mention in its
            three lines such subjects as the season, time of day, and the
            dominant features of the landscape, making it almost an independent
            poem.
            The hokku (often interchangeably called haikai) became known as the
            haiku late in the 19th century, when it was entirely divested of its
            original function of opening a sequence of verse.
            Today the term haiku is used to describe all poems that use the
            three-line 17-syllable structure, even the earlier hokku. <br></br><br></br>
            Originally, the haiku form was restricted in subject matter to an
            objective description of nature suggestive of one of the seasons,
            evoking a definite, though unstated, emotional response. The form
            gained distinction early in the <strong>Tokugawa period</strong> (1603–1867) when the
            great master <strong>Bashō</strong> elevated the hokku to a highly refined and
            conscious art. He began writing what was considered this “new style”
            of poetry in the 1670s, while he was in Edo (now Tokyo). Among his
            earliest haiku is:  <br></br><br></br>
            <i>On a withered branch <br></br>
            A crow has alighted;<br></br>
            Nightfall in autumn.</i>
            <br></br><br></br>
            Bashō subsequently traveled throughout Japan,
            and his experiences became the subject of his verse. His haiku were
            accessible to a wide cross section of Japanese society, and these
            poems’ broad appeal helped to establish the form as the most popular
            form in Japanese poetry.  <br></br><br></br>
            After Bashō, and particularly after the haiku’s revitalization in the 19th
            century, its range of subjects expanded beyond nature. But the haiku
            remained an art of expressing much and suggesting more in the fewest
            possible words. Other outstanding haiku masters were <strong>Buson</strong> in the
            18th century, <strong>Issa</strong> in the late 18th and early 19th centuries, <strong>Masaoka Shiki</strong> in the later 19th century, and <strong>Takahama Kyoshi</strong> and <strong>Kawahigashi Hekigotō</strong> in the late 19th and early 20th centuries. At
            the turn of the 21st century there were said to be a million
            Japanese who composed haiku under the guidance of a teacher. <br></br><br></br> A poem
            written in the haiku form or a modification of it in a language
            other than Japanese is also called a haiku. In English the haiku
            composed by the <strong>Imagists</strong> were especially influential during the
            early 20th century. The form’s popularity beyond Japan expanded
            significantly after <strong>World War II</strong>, and today haiku are written in a
            wide range of languages.
          </p>
        </div>
      </div>
    );
  }
}
