export default function InfoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-haiku-dark mb-8">
        A brief history of haikus
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>Haiku</strong>, unrhymed poetic form consisting of 17 syllables
          arranged in three lines of 5, 7, and 5 syllables respectively. The haiku
          first emerged in Japanese literature during the 17th century, as a terse
          reaction to elaborate poetic traditions, though it did not become known by
          the name haiku until the 19th century.
        </p>

        <p>
          The term <em>haiku</em> is derived from the first element of the word{" "}
          <em>haikai</em> (a humorous form of <em>renga</em>, or linked-verse poem)
          and the second element of the word hokku (the initial stanza of a{" "}
          <em>renga</em>). The hokku, which set the tone of a <em>renga</em>, had to
          mention in its three lines such subjects as the season, time of day, and the
          dominant features of the landscape, making it almost an independent poem.
        </p>

        <p>
          Originally, the haiku form was restricted in subject matter to an objective
          description of nature suggestive of one of the seasons, evoking a definite,
          though unstated, emotional response. The form gained distinction early in the{" "}
          <strong>Tokugawa period</strong> (1603&ndash;1867) when the great master{" "}
          <strong>Bash&#333;</strong> elevated the hokku to a highly refined and
          conscious art. Among his earliest haiku is:
        </p>

        <blockquote className="border-l-4 border-haiku pl-6 italic text-haiku-dark">
          <p>
            On a withered branch
            <br />
            A crow has alighted;
            <br />
            Nightfall in autumn.
          </p>
        </blockquote>

        <p>
          Bash&#333; subsequently traveled throughout Japan, and his experiences became
          the subject of his verse. His haiku were accessible to a wide cross section
          of Japanese society, and these poems&apos; broad appeal helped to establish the
          form as the most popular form in Japanese poetry.
        </p>

        <p>
          After Bash&#333;, and particularly after the haiku&apos;s revitalization in
          the 19th century, its range of subjects expanded beyond nature. But the haiku
          remained an art of expressing much and suggesting more in the fewest possible
          words. Other outstanding haiku masters were <strong>Buson</strong> in the 18th
          century, <strong>Issa</strong> in the late 18th and early 19th centuries,{" "}
          <strong>Masaoka Shiki</strong> in the later 19th century, and{" "}
          <strong>Takahama Kyoshi</strong> and <strong>Kawahigashi Hekigot&#333;</strong>{" "}
          in the late 19th and early 20th centuries.
        </p>

        <p>
          A poem written in the haiku form or a modification of it in a language other
          than Japanese is also called a haiku. In English the haiku composed by the{" "}
          <strong>Imagists</strong> were especially influential during the early 20th
          century. The form&apos;s popularity beyond Japan expanded significantly after{" "}
          <strong>World War II</strong>, and today haiku are written in a wide range of
          languages.
        </p>
      </div>
    </div>
  );
}
