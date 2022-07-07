import closeBTN from "./img/closeBtn.png";

function InfoWindow(props) {
  return (
    <div>
      {!props.languageChange ? (
        <div className="InfoWindow">
          <div className="closeBTN">
            <img
              src={closeBTN}
              width={"3%"}
              height={"3%"}
              alt=""
              onClick={props.ChangePopUp}
            />
          </div>
          <h2>დანახარჯები-გამოშვების ცხრილი და მულტიპლიკატორები</h2>
          <p>
            დანახარჯები-გამოშვების (IO) ცხრილი 1930-იან წლებში შეიქმნა ვასილი
            ლეონტიევის მიერ, რისთვისაც 1973 წელს ნობელის პრემია მიიღო ეკონომიკის
            დარგში. დანახარჯები-გამოშვების ცხრილი ხშირად მოიხსენიება, როგორც
            ლეონტიევის მოდელი. დღესდღეობით აღნიშნული მოდელი მნიშვნელოვანი და
            ხშირად გამოყენებადი ინსტრუმენტია ეკონომიკაში მიმდინარე მოვლენებისა
            და მაკროინდიკატორების შეფასებისათვის.{" "}
          </p>
          <p>
            დანახარჯების-გამოშვების ცხრილი შედგება წრფივი განტოლებებისაგან,
            რომელიც გამოსახავს ეკონომიკაში საქონლისა და მომსახურების წარმოებას
            და მის განაწილებას მომხმარებლებს შორის. მოცემული მოდელი კარგად
            აღწერს დარგთაშორის დამოკიდებულებას და ტექნოლოგიური დანახარჯების
            კოეფიციენტის გამოყენებით გვიჩვენებს ერთი ერთეული i პროდუქტის
            საწარმოებლად რამდენი ერთეული j პროდუქტია საჭიროა. მოდელზე დაყრდნობით
            განისაზღვრება ცალკეული დარგის პროდუქციის საბოლოო მოხმარების ცვლილება
            რა გავლენას ახდენს სხვა დარგების გამოშვებაზე. დანახარჯები გამოშვების
            ცხრილი მნიშვნელოვანი ინსტრუმენტია საბოლოო მოხმარებაში ეგზოგენური
            შოკის გამოშვებაზე გავლენის შესაფასებლად.{" "}
          </p>
          <p>
            დანახარჯები-გამოშვების ცხრილი (IOT) რესურსებისა და გამოყენების
            ცხრილებს ეფუძნება, რისთვისაც საჭიროა ცხრილების საბაზისო ფასებში
            გადაყვანა იმპორტის, პროდუქციაზე გადასახადებისა და სუბსიდიების და
            სავაჭრო მარჟების გამოკლებით. ცხრილების საბაზისო ფასების მიღების
            შემდეგ გამოყენებულია ფიქსირებული გაყიდვების სტრუქტურის დაშვება
            (მოდელი D). რომლის მიხედვითაც თითოეულ პროდუქტს აქვს მისთვის
            დამახასიათებელი გაყიდვების სტრუქტურა, მიუხედავად იმისა რომელმა
            დარგმა აწარმოა.
          </p>
          <h3>დანახარჯები-გამოშვების ცხრილი მოიცავს შემდეგ ცხრილებს:</h3>
          <ul>
            <li>ადგილობრივი წარმოების ცხრილი;</li>
            <li>იმპორტის ცხრილი;</li>
            <li>ადგილობრივი წარმოების მოხმარება;</li>
            <li>იმპორტული პროდუქციის მოხმარება;</li>
          </ul>
          <p>
            დანახარჯები-გამოშვების ცხრილის მიხედვით იანგარიშება მულტიპლიკატორი,
            რომელიც განსაზღვრავს საბოლოო მოხმარების ცვლილების გავლენას დარგებზე.
            მაგალითად, თუ წინასწარ განსაზღვრულია საბოლოო მოხმარების მოცულობა, IO
            მულტიპლიკატორის გამოყენებით შესაძლებელია განისაზღვროს დარგების
            გამოშვების მოცულობა, რომელიც დააკმაყოფილებს აღნიშნულ მოთხოვნას.
          </p>
          <p>
            პორტალზე წარმოდგენილ ანალიზში გამოყენებულია მულტიპლიკატორები,
            რომელიც მოიცავს მოთხოვნის ცვლილების პირდაპირ და არაპირდაპირ
            ეფექტებს. პირდაპირი ეფექტი წარმოიქმნება, როდესაც პროდუქციაზე საბოლოო
            მოხმარების ზრდა იწვევს გამოშვების ზრდას, რაც თავის მხრივ ზრდის
            მოთხოვნას შუალედურ მოხმარებაზე. შუალედურ მოხმარებაზე მოთხოვნის ზრდა
            თავის მხრივ იწვევს გამოშვების ზრდას, რასაც კვლავ შუალედური
            მოხმარების გაზრდამდე მივყავართ. აღნიშნული პროცესი რამდენიმე რაუნდად
            გრძელდება მანამ წონასწორობაში არ მოვა გამოშვება და მოხმარება.
            მოცემულ ეფექტს არაპირდაპირი ეფექტი ეწოდება.
          </p>
          <p>
            წარმოდგენილ მოდელში სტრიქონები აღწერს დარგის მთლიანი გამოშვების
            განაწილებას ეკონომიკაში, ხოლო სვეტები - დარგის გამოშვებისთვის საჭირო
            შუალედური მოხმარების დეკომპოზიციას დარგების მიხედვით.{" "}
          </p>
          <p>
            დანახარჯები-გამოშვების ცხრილიდან ლეონტიევის კოეფიციენტების
            გამოყენებით მიიღება მულტიპლიკატორები, რომლებიც ფართოდ გამოიყენება
            ეკონომიკური ანალიზისთვის. მულტიპლიკატორების საშუალებით შესაძლებელია
            საბოლოო მოხმარების ცვლილების მაკროეკონომიკურ მაჩვენებლებზე გავლენის
            შეფასება.{" "}
          </p>

          <h3>პორტალზე გამოყენებულია შემდეგი მულტიპლიკატორები:</h3>

          <ul>
            <li>გამოშვების მულტიპლიკატორი;</li>
            <li>
              დამატებული ღირებულების (მშპ საბაზისო ფასებში) მულტიპლიკატორი;
            </li>
            <li>იმპორტის მულტიპლიკატორი;</li>
            <li>ძირითადი კაპიტალის მთლიანი ფორმირების მულტიპლიკატორი;</li>
            <li>დასაქმების მულტიპლიკატორი;</li>
            <li>შრომის ანაზღაურების მულტიპლიკატორი.</li>
          </ul>
          <p>
            j დარგის გამოშვების მულტიპლიკატორი გვიჩვენებს ყველა დარგის ჯამურ
            გამოშვებას, რომელიც საჭიროა წარმოების პროცესში, ადგილობრივი
            გამოშვების j პროდუქტის ერთი ერთეული საბოლოო მოხმარებისთვის
            საწარმოებლად. მაგალითად თუ j დარგის გამოშვების მთლიანი
            მულტიპლიკატორი 1.598-ის ტოლია, j დარგის პროდუქტის საბოლოო მოხმარების
            1 ერთეულით გაზრდა გამოიწვევს მთლიან ეკონომიკაში გამოშვების 1.598-ით
            გაზრდას. პირდაპირი ეფექტი - 1 ერთეული გამოსახავს საბოლოო მოხმარების
            ზრდას, ხოლო არაპირდაპირი ეფექტის გავლენა გამოიწვევს 0.598 ერთეულით
            იმ დარგების გამოშვების ზრდას, რომელთა წარმოებული პროდუქტიც
            გამოიყენება შუალედურ მოხმარებად j დარგის პროდუქტის წარმოების
            პროცესში.
          </p>
          <p>
            დამატებული ღირებულების მულტიპლიკატორი გვიჩვენებს საბოლოო მოხმარების
            ერთი ერთეულით გაზრდა როგორ გაზრდის ეკონომიკაში მთლიან დამატებულ
            ღირებულებას. იმპორტის მულტიპლიკატორი საბოლოო მოხმარებასა და იმპორტის
            ურთიერთკავშირს ასახავს, ხოლო ძირითადი კაპიტალის მთლიანი ფორმირების
            მულტიპლიკატორი საბოლოო მოხმარებისა და ძირითადი კაპიტალის ფორმირებას
            შორის კავშირს გვიჩვენებს. დასაქმებისა და შრომის ანაზღაურების
            მულტიპლიკატორები ასახავენ საბოლოო მოხმარების ცვლილების გავლენას
            დასაქმების დონესა და შრომის ანაზღაურებაზე. სოფლის მეურნეობის დარგში
            დასაქმებულთა რიცხოვნობა მოიცავს როგორც დაქირავებით დასაქმებულებს,
            ასევე თვითდასაქმებულებსა და ადამიანებს, რომლებიც საკუთარი
            მოხმარებისთვის აწარმოებენ სოფლის მეურნეობის პროდუქციას.{" "}
          </p>
        </div>
      ) : (
        <div className="InfoWindow">
          <div className="closeBTN">
            <img
              src={closeBTN}
              width={"3%"}
              height={"3%"}
              alt=""
              onClick={props.ChangePopUp}
            />
          </div>
          <h2>Portal of Economic Analysis and the Input-Output Table</h2>
          <p>
            Input-Output Table (IOT) was developed in late 30s of the 20th
            century by Professor Wassily Leontief, who received the Nobel Prize
            in Economic Science in 1973. The Input-Output table is frequently
            named as a Leontief Model. The model is a frequently applied tool in
            the analysis of economic events and macroeconomic indicators.
          </p>
          <p>
            The Input-Output table consists of a set of linear equations,
            reflecting production of goods and services in the economy and their
            distribution among users. The model describes inter-industry
            dependencies and using technological coefficients shows how much j
            products are needed in order to produce product i. Based on the
            model it is possible to identify how changed demand of one industry
            products affects the output of other industries. Input-output table
            is an important tool in the analysis of effects in the economy
            caused by exogenous shocks.
          </p>
          <p>
            The Input-Output table is based on a supply and use tables converted
            in basic prices, followed by an assumption of fixed sales structure
            (Model 4). According to the model each product has its own sales
            structure notwithstanding its producing industries.
          </p>
          <h3>The input-output table combines the following tables:</h3>
          <ul>
            <li>Domestic production;</li>
            <li>Import;</li>
            <li>Consumption of domestic production;</li>
            <li>Consumption of Import;</li>
            <li>Value added.</li>
          </ul>
          <p>
            Based on the input-output table multipliers are calculated,
            identifying effect of final demand change on industries. For
            example, in case final demand change for a particular product is
            exogenously given, total output change can be estimated, needed to
            satisfy the demand.
          </p>
          <p>
            Multipliers used on the portal cover the direct and indirect effects
            of demand change. Direct effect is created, when the final demand
            increase causes an increase in intermediate consumption, which
            itself rises the output and so on. The process continues for several
            rounds until the system is balanced. The effect is called the
            indirect effect.
          </p>
          <p>
            In the provided model rows represent distribution of industry output
            in the economy, while columns - the decomposition of the
            intermediate consumption required for the output of the industry by
            industries.
          </p>
          <p>
            Multipliers, which are widely used for economic analysis, are
            obtained from the input-output table using Leontief coefficients.
            Based on multipliers, it is possible to evaluate the impact of
            changes in final consumption on macroeconomic indicators.
          </p>

          <h3>The following multipliers are used on the portal:</h3>

          <ul>
            <li>Output multiplier;</li>
            <li>Value added (GDP at basic prices) multiplier;</li>
            <li>Import multiplier;</li>
            <li>Gross fixed capital formation multiplier;</li>
            <li>Employment multiplier;</li>
            <li>Compensation of employee multiplier.</li>
          </ul>
          <p>
            The output multiplier of industry j shows the total output of all
            industries required in the production process to produce one unit of
            local output product j for final consumption. For example, if the
            output multiplier of industry j is equal to 1.598, an increase in
            the final consumption of the product of industry j by 1 unit will
            lead to an increase in output in the economy by 1.598. Direct effect
            - 1 unit represents an increase in final consumption and indirect
            effect will lead to an increase in the output by 0.598 units of
            industries whose output is used as intermediate consumption in the
            production process of industry j.
          </p>
          <p>
            The value added multiplier shows how a one unit increase in final
            consumption in the economy increases the total value added. The
            import multiplier reflects the relationship between final
            consumption and imports, while the fixed capital formation
            multiplier shows the relationship between final consumption and
            fixed capital formation. Employment and compensation of employee
            multipliers reflect the effect of a change in final consumption on
            the level of employment and Compensation of employee. The number of
            employees in the agriculture industry includes hired, self-employed
            and persons who produce agricultural products for their own
            consumption.
          </p>
        </div>
      )}
    </div>
  );
}
export default InfoWindow;
