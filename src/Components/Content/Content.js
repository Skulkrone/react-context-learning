import React, { useContext } from "react";
import BtnToggle from "../BtnToggle/BtnToggle";
import "./Content.css";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Content() {
  // le hook useContext va nous permettre d'utiliser le state depuis ThemeContext
  // le state qui va ensuite ruisseler jusqu'au composant qui est ici et qu'on va pouvoir utiliser
  const { theme } = useContext(ThemeContext);

  // console.log(theme);

  return (
    <div className="container">
      <BtnToggle></BtnToggle>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p className="content-txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia
        molestiae cumque sit amet, nostrum dolore ex voluptatum doloremque
        maxime corrupti ullam velit architecto quo distinctio et reiciendis. Sit
        rem praesentium id atque quos non cumque, a neque nostrum facere esse
        culpa delectus itaque exercitationem, deserunt suscipit dolorem
        assumenda iste deleniti officiis alias sapiente! Reprehenderit facere
        sunt, quam illo ab rerum quis obcaecati. Nisi totam minima sunt incidunt
        culpa tenetur, facilis alias labore ipsam delectus. Voluptate, voluptas.
        Odit exercitationem at animi voluptatibus sed vitae blanditiis voluptate
        saepe sapiente nisi dolore, laudantium quam sunt placeat voluptates
        adipisci ex deleniti inventore officia et nobis dicta? Et corrupti
        itaque dolorem sequi natus assumenda reprehenderit deleniti nesciunt
        temporibus cumque nam maxime quaerat vitae sed dignissimos tempora non
        sint at nemo molestias, officia placeat. Veritatis debitis porro sit
        odio dolorum tempora, distinctio expedita totam excepturi fuga, dicta
        sint necessitatibus harum omnis. Voluptatum impedit labore veniam
        molestias? Ullam repellendus unde fugiat aspernatur enim quaerat totam
        doloribus ex maxime ratione assumenda sunt, sit aliquid eos ut culpa
        deleniti doloremque debitis at reiciendis rem incidunt iste corrupti
        accusamus. Sunt voluptatum dolorem, ab quia blanditiis modi enim
        quisquam cumque corrupti aliquid aperiam delectus ut sapiente quidem
        illo cum repellat expedita? Porro consectetur beatae veniam ipsa aliquam
        similique doloremque accusantium! Nisi, deserunt iusto distinctio
        consequuntur, dolor ullam autem sed cum possimus totam, ducimus
        architecto modi aut tempore maxime recusandae? Libero totam perferendis
        quia mollitia, commodi quas. Ex tenetur nulla distinctio accusantium ut,
        rem pariatur ullam perspiciatis qui officiis vitae, ad quasi aut beatae
        aliquam fuga consectetur quam non. Mollitia est odit optio soluta,
        nostrum repudiandae non ex unde corporis accusamus molestias eum
        reprehenderit pariatur quidem voluptate illo, ipsum ipsam maxime
        assumenda suscipit. Perferendis iste delectus architecto iusto saepe
        esse tempore autem voluptatibus culpa aliquid quibusdam quisquam
        voluptate, velit, eius deserunt? Quia officia non laborum sunt nulla,
        corporis odio voluptatibus ipsum corrupti ullam aliquam expedita
        reiciendis? Iure repellat error dolorem corrupti vel culpa distinctio
        inventore adipisci? Repudiandae eligendi in voluptas accusantium nam
        natus, asperiores labore! Illo numquam ratione quia voluptatibus
        recusandae expedita suscipit pariatur vel, eum magnam officia. Labore
        eaque possimus minima, ab enim accusamus natus atque. Porro minima quam
        provident? Suscipit fugit sapiente praesentium enim vero, magnam in.
        Repellat eaque ratione sit, nulla eos non dolor tempore architecto sint
        minima maxime alias distinctio nemo laborum? Ex dolorem obcaecati,
        voluptas culpa quod possimus. Veritatis, fugit assumenda tenetur
        sapiente totam suscipit ea laboriosam debitis doloremque dolores non
        numquam nam optio illum cum minus animi incidunt accusamus esse dolore.
        Fuga repudiandae error dolorem libero assumenda recusandae fugit
        officiis asperiores soluta, sint id hic eligendi doloribus. Fugit,
        quaerat, ducimus, natus placeat adipisci ipsa consequatur sapiente
        delectus voluptates nostrum repudiandae! Quam ex nihil, mollitia
        explicabo id ipsa. Nam placeat quos itaque eum qui molestiae fugit esse.
        Et qui assumenda, ex architecto deleniti aut eos, molestiae aliquam
        soluta inventore nulla, iure earum provident tenetur! Officiis quas
        facilis hic aliquam aspernatur eligendi pariatur omnis perspiciatis
        officia iusto, consequuntur temporibus provident explicabo dolor numquam
        esse iure, recusandae fugiat nam ad ducimus animi dolore deleniti!
        Assumenda numquam illo molestias asperiores unde, ipsa placeat ad quae
        consequatur nostrum aperiam earum! Sed, ad. Possimus, temporibus
        explicabo quibusdam consequatur quasi unde earum modi recusandae eaque
        architecto. Enim repudiandae placeat aut molestias obcaecati
        consequuntur vel ipsam illum repellat quis fugit eligendi tenetur
        maiores necessitatibus, architecto laboriosam atque minima numquam
        ipsum! Itaque, ipsum placeat aperiam nemo excepturi libero cupiditate at
        iure unde odio quas porro tenetur. Atque, quis modi! Voluptatum maxime
        eius temporibus! Veritatis quo magni consectetur id vel, hic vitae!
        Voluptatum nam expedita consectetur totam, quia atque cupiditate
        consequuntur. Quaerat numquam id repellendus obcaecati asperiores
        excepturi suscipit quas, architecto quis sint, pariatur eius
        perspiciatis maxime molestias iure dolorum quasi possimus itaque cum
        aliquam repudiandae. Voluptatem sint inventore necessitatibus quod sunt
        est dolorum consequuntur quaerat dolorem nam quam, amet, cumque dolore
        corporis placeat mollitia! Quos ex, ullam eos autem porro quo ad a
        delectus illum nulla aliquam doloribus magnam similique deleniti
        corrupti vero pariatur et! Nisi ipsam necessitatibus veniam, accusantium
        perferendis enim, ea porro soluta dicta corporis molestiae ex eius quam
        quae a doloremque tempora at, excepturi error assumenda laboriosam id!
        Non, nisi. Repudiandae nihil at amet corporis. Id amet cum porro ullam
        exercitationem voluptas voluptatum, similique repudiandae, deleniti ut
        qui corporis magni facilis cupiditate et aut enim, nihil consectetur
        eveniet quaerat. Dolor ratione consequuntur accusantium? Nostrum minima
        corporis id natus in rem, cupiditate ut nulla incidunt laboriosam illo.
        Soluta neque, consequuntur ullam animi, eligendi odio minima dolore
        harum sunt officia sit nostrum alias eos suscipit, beatae iure quos
        autem placeat aspernatur! Officia accusantium quos nostrum illum
        dignissimos consequuntur id animi corporis laudantium at inventore
        voluptatum itaque tenetur, quis molestias libero? Corrupti earum iure
        soluta, est vitae quos, sapiente similique voluptatibus numquam deserunt
        nulla dolores. Ex, modi. Quo sapiente non, quasi iste eum ex nisi sed
        incidunt deleniti fugit enim obcaecati doloremque inventore ipsam iusto!
        Dicta dolorum aut libero quisquam, eum dolores voluptas eligendi facilis
        iusto ipsa a ullam molestias sed quidem, tempore nesciunt tempora
        suscipit, accusamus ab culpa cupiditate vel perspiciatis. Nemo
        repellendus ab atque! Nesciunt iusto ullam magnam eius maiores aliquid
        dolores provident ex praesentium aut at aliquam consequatur quia eum
        assumenda delectus aperiam id voluptatum dolore esse reiciendis quod,
        illo doloribus fugiat? Libero omnis natus, tenetur beatae quam ipsam,
        eius ex consequuntur amet quaerat sunt vitae laborum alias eaque. Saepe
        deleniti iusto impedit nisi sed, laborum cum minima suscipit beatae
        totam rerum nihil delectus quae, vel praesentium quidem modi ut eum
        porro. Ad magni, quas esse eius nostrum nesciunt officiis, ullam quaerat
        illo ducimus expedita eaque mollitia nam explicabo. Voluptate
        reprehenderit ut adipisci nihil fugiat tenetur aspernatur dicta
        consectetur commodi maiores, est ratione sed sit, illo unde sequi earum
        porro quasi alias ducimus, recusandae delectus voluptatem corporis.
        Reiciendis, labore laudantium perspiciatis autem minima dolore odio
        iste! Laboriosam accusamus numquam debitis maxime, repellat, incidunt
        eligendi enim, optio ipsam praesentium tempore voluptatum? Dicta
        similique illo inventore possimus cumque iusto odit praesentium
        perspiciatis laudantium sapiente atque, voluptatem rerum aliquam,
        repudiandae aut, nulla eius minus.
      </p>
    </div>
  );
}
