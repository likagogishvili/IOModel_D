import MainPage from "../MainPage/MainPage";
import Axios from "axios";
import { useEffect, useState } from "react";

function Data() {
  const [gamoshvebisMult, SetGamoshvebisMult] = useState([]);
  const [damatebuliMult, SetDamatebuliMult] = useState([]);
  const [dasaqmebisMult, SetDasaqmebisMult] = useState([]);
  const [importisMult, SetImportisMult] = useState([]);
  const [dziritadiKapitaliMult, SetDziritadiKapitaliMult] = useState([]);
  const [shromisAnazgaureba, SetShromisAnazgaureba] = useState([]);
  const [mtlianiMultipikatorebi, SetMtlianiMultipikatorebi] = useState([]);
  const [mimdinareGirebuleba, SetMimdinareGirebuleba] = useState([]);

  ////sabolooMoxmareba
  const sabolooMoxmareba = [];
  mimdinareGirebuleba.map((item) =>
    sabolooMoxmareba.push(item.SabolooMoxmareba * 1)
  );

  //axali gamoshvebis multiplikatoris matricis sheqmna
  const axaliGamoshveba = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < gamoshvebisMult.length; i++) {
    axaliGamoshveba[i].push(
      gamoshvebisMult[i].Soflis*1,
      gamoshvebisMult[i].Samto*1,
      gamoshvebisMult[i].Damamushavebeli*1,
      gamoshvebisMult[i].Eleqtroenergiis*1,
      gamoshvebisMult[i].Wyalbobarageba*1,
      gamoshvebisMult[i].Mshenebloba*1,
      gamoshvebisMult[i].Sabitumo*1,
      gamoshvebisMult[i].Transporti*1,
      gamoshvebisMult[i].Gantavsebis*1,
      gamoshvebisMult[i].Informacia*1,
      gamoshvebisMult[i].Safinanso*1,
      gamoshvebisMult[i].UdzraviQoneba*1,
      gamoshvebisMult[i].Profesiuli*1,
      gamoshvebisMult[i].Administraciuli*1,
      gamoshvebisMult[i].Saxelmwifo*1,
      gamoshvebisMult[i].Ganatleba*1,
      gamoshvebisMult[i].Jandacva*1,
      gamoshvebisMult[i].Xelovneba*1,
      gamoshvebisMult[i].Sxva*1,
      gamoshvebisMult[i].Shinameurneoba*1
    );
  }
  
  // console.log(axaliGamoshveba)
  //dzveli gamoshveba
  const sabolooGamoshveba = [];
  mimdinareGirebuleba.map((item) =>
    sabolooGamoshveba.push(item.Gamoshveba * 1)
  );

  //damatebiti girebulebis multiplikatoris matricis sheqmna
  const axaliDamatebiti = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < damatebuliMult.length; i++) {
    axaliDamatebiti[i].push(
      damatebuliMult[i].Soflis,
      damatebuliMult[i].Samto,
      damatebuliMult[i].Damamushavebeli,
      damatebuliMult[i].Eleqtroenergiis,
      damatebuliMult[i].Wyalbobarageba,
      damatebuliMult[i].Mshenebloba,
      damatebuliMult[i].Sabitumo,
      damatebuliMult[i].Transporti,
      damatebuliMult[i].Gantavsebis,
      damatebuliMult[i].Informacia,
      damatebuliMult[i].Safinanso,
      damatebuliMult[i].UdzraviQoneba,
      damatebuliMult[i].Profesiuli,
      damatebuliMult[i].Administraciuli,
      damatebuliMult[i].Saxelmwifo,
      damatebuliMult[i].Ganatleba,
      damatebuliMult[i].Jandacva,
      damatebuliMult[i].Xelovneba,
      damatebuliMult[i].Sxva,
      damatebuliMult[i].Shinameurneoba
    );
  }
  //dzveli damatebiti girebulebis
  const dzveliDamatebiti = [];
  mimdinareGirebuleba.map((item) =>
    dzveliDamatebiti.push(item.DamatebitiGirebuleba * 1)
  );

  //dasaqmebis multiplikatoris matricis sheqmna
  const axaliDasaqmebis = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < dasaqmebisMult.length; i++) {
    axaliDasaqmebis[i].push(
      dasaqmebisMult[i].Soflis,
      dasaqmebisMult[i].Samto,
      dasaqmebisMult[i].Damamushavebeli,
      dasaqmebisMult[i].Eleqtroenergiis,
      dasaqmebisMult[i].Wyalbobarageba,
      dasaqmebisMult[i].Mshenebloba,
      dasaqmebisMult[i].Sabitumo,
      dasaqmebisMult[i].Transporti,
      dasaqmebisMult[i].Gantavsebis,
      dasaqmebisMult[i].Informacia,
      dasaqmebisMult[i].Safinanso,
      dasaqmebisMult[i].UdzraviQoneba,
      dasaqmebisMult[i].Profesiuli,
      dasaqmebisMult[i].Administraciuli,
      dasaqmebisMult[i].Saxelmwifo,
      dasaqmebisMult[i].Ganatleba,
      dasaqmebisMult[i].Jandacva,
      dasaqmebisMult[i].Xelovneba,
      dasaqmebisMult[i].Sxva,
      dasaqmebisMult[i].Shinameurneoba
    );
  }
  //dzveli dasaqmeba
  const dzveliDasaqmebis = [];
  mimdinareGirebuleba.map((item) => dzveliDasaqmebis.push(item.Dasaqmeba * 1));

  //importis multiplikatoris matricis sheqmna
  const axaliImporti = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < importisMult.length; i++) {
    axaliImporti[i].push(
      importisMult[i].Soflis,
      importisMult[i].Samto,
      importisMult[i].Damamushavebeli,
      importisMult[i].Eleqtroenergiis,
      importisMult[i].Wyalbobarageba,
      importisMult[i].Mshenebloba,
      importisMult[i].Sabitumo,
      importisMult[i].Transporti,
      importisMult[i].Gantavsebis,
      importisMult[i].Informacia,
      importisMult[i].Safinanso,
      importisMult[i].UdzraviQoneba,
      importisMult[i].Profesiuli,
      importisMult[i].Administraciuli,
      importisMult[i].Saxelmwifo,
      importisMult[i].Ganatleba,
      importisMult[i].Jandacva,
      importisMult[i].Xelovneba,
      importisMult[i].Sxva,
      importisMult[i].Shinameurneoba
    );
  }
  //dzveli importi
  const dzveliImporti = [];
  mimdinareGirebuleba.map((item) => dzveliImporti.push(item.Importi * 1));

  //dziritadi kapitalis matricis sheqmna
  const axaliKapitali = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < dziritadiKapitaliMult.length; i++) {
    axaliKapitali[i].push(
      dziritadiKapitaliMult[i].Soflis,
      dziritadiKapitaliMult[i].Samto,
      dziritadiKapitaliMult[i].Damamushavebeli,
      dziritadiKapitaliMult[i].Eleqtroenergiis,
      dziritadiKapitaliMult[i].Wyalbobarageba,
      dziritadiKapitaliMult[i].Mshenebloba,
      dziritadiKapitaliMult[i].Sabitumo,
      dziritadiKapitaliMult[i].Transporti,
      dziritadiKapitaliMult[i].Gantavsebis,
      dziritadiKapitaliMult[i].Informacia,
      dziritadiKapitaliMult[i].Safinanso,
      dziritadiKapitaliMult[i].UdzraviQoneba,
      dziritadiKapitaliMult[i].Profesiuli,
      dziritadiKapitaliMult[i].Administraciuli,
      dziritadiKapitaliMult[i].Saxelmwifo,
      dziritadiKapitaliMult[i].Ganatleba,
      dziritadiKapitaliMult[i].Jandacva,
      dziritadiKapitaliMult[i].Xelovneba,
      dziritadiKapitaliMult[i].Sxva,
      dziritadiKapitaliMult[i].Shinameurneoba
    );
  }
  //dzveli kapitali
  const dzveliKapitali = [];
  mimdinareGirebuleba.map((item) =>
    dzveliKapitali.push(item.DziritadiKapitali * 1)
  );

  //shromis matricis sheqmna
  const axaliShroma = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (let i = 0; i < shromisAnazgaureba.length; i++) {
    axaliShroma[i].push(
      shromisAnazgaureba[i].Soflis,
      shromisAnazgaureba[i].Samto,
      shromisAnazgaureba[i].Damamushavebeli,
      shromisAnazgaureba[i].Eleqtroenergiis,
      shromisAnazgaureba[i].Wyalbobarageba,
      shromisAnazgaureba[i].Mshenebloba,
      shromisAnazgaureba[i].Sabitumo,
      shromisAnazgaureba[i].Transporti,
      shromisAnazgaureba[i].Gantavsebis,
      shromisAnazgaureba[i].Informacia,
      shromisAnazgaureba[i].Safinanso,
      shromisAnazgaureba[i].UdzraviQoneba,
      shromisAnazgaureba[i].Profesiuli,
      shromisAnazgaureba[i].Administraciuli,
      shromisAnazgaureba[i].Saxelmwifo,
      shromisAnazgaureba[i].Ganatleba,
      shromisAnazgaureba[i].Jandacva,
      shromisAnazgaureba[i].Xelovneba,
      shromisAnazgaureba[i].Sxva,
      shromisAnazgaureba[i].Shinameurneoba
    );
  }
  //dzveli shroma
  const dzveliShroma = [];
  mimdinareGirebuleba.map((item) =>
    dzveliShroma.push(item.ShromisAnazgaureba * 1)
  );



  ///mtliani multiplikatorebis matricis sheqmna


  const axaliMtlianiMultiplikatorebi = [
    [],
    [],
    [],
    [],
    [],
    [],
  ];


  for (let i = 0; i < mtlianiMultipikatorebi.length; i++) {
    axaliMtlianiMultiplikatorebi[i].push(
    mtlianiMultipikatorebi[i].Soflis *1,
    mtlianiMultipikatorebi[i].Samto*1,
    mtlianiMultipikatorebi[i].Damamushavebeli*1,
    mtlianiMultipikatorebi[i].Eleqtroenergiis*1,
    mtlianiMultipikatorebi[i].Wyalbobarageba*1,
    mtlianiMultipikatorebi[i].Mshenebloba*1,
    mtlianiMultipikatorebi[i].Sabitumo*1,
    mtlianiMultipikatorebi[i].Transporti*1,
    mtlianiMultipikatorebi[i].Gantavsebis*1,
    mtlianiMultipikatorebi[i].Informacia*1,
    mtlianiMultipikatorebi[i].Safinanso*1,
    mtlianiMultipikatorebi[i].UdzraviQoneba*1,
    mtlianiMultipikatorebi[i].Profesiuli*1,
    mtlianiMultipikatorebi[i].Administraciuli*1,
    mtlianiMultipikatorebi[i].Saxelmwifo*1,
    mtlianiMultipikatorebi[i].Ganatleba*1,
    mtlianiMultipikatorebi[i].Jandacva*1,
    mtlianiMultipikatorebi[i].Xelovneba*1,
    mtlianiMultipikatorebi[i].Sxva*1,
    mtlianiMultipikatorebi[i].Shinameurneoba*1
    );
  }


  useEffect(() => {
    Axios.get("http://localhost:4000/GamoshvebisMult").then((response) => {
      const data = response.data;
      SetGamoshvebisMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/DamatebuliMult").then((response) => {
      const data = response.data;
      SetDamatebuliMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/DasaqmebisMult").then((response) => {
      const data = response.data;
      SetDasaqmebisMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/ImportisMult").then((response) => {
      const data = response.data;
      SetImportisMult(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/DziritadiKapitaliMult").then(
      (response) => {
        const data = response.data;
        SetDziritadiKapitaliMult(data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/ShromisAnazgaureba").then((response) => {
      const data = response.data;
      SetShromisAnazgaureba(data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/MtlianiMultipikatorebi").then(
      (response) => {
        const data = response.data;
        SetMtlianiMultipikatorebi(data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/MimdinareGirebuleba").then((response) => {
      const data = response.data;
      SetMimdinareGirebuleba(data);
    });
  }, []);

  return (
    <div>
      <MainPage
        sabolooMoxmareba={sabolooMoxmareba}
        sabolooGamoshveba={sabolooGamoshveba}
        mimdinareGirebuleba={mimdinareGirebuleba}
        axaliGamoshveba={axaliGamoshveba}
        axaliDamatebiti={axaliDamatebiti}
        dzveliDamatebiti={dzveliDamatebiti}
        axaliDasaqmebis={axaliDasaqmebis}
        dzveliDasaqmebis={dzveliDasaqmebis}
        axaliImporti={axaliImporti}
        dzveliImporti={dzveliImporti}
        axaliKapitali={axaliKapitali}
        dzveliKapitali={dzveliKapitali}
        axaliShroma={axaliShroma}
        dzveliShroma={dzveliShroma}
        axaliMtlianiMultiplikatorebi={axaliMtlianiMultiplikatorebi}
      />
      <p></p>
    </div>
  );
}
export default Data;
