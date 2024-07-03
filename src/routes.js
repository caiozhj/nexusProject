import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Paciente from "views/admin/paciente";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import ListConsulta from "views/admin/consulta/ListConsulta";
import ListMedico from "views/admin/medico/ListMedico";
import ListVisitantes from "views/admin/visitantes/listVisitantes";
import ListFuncionario from "views/admin/funcionario/ListFuncionario";
import ListResidencias from "views/admin/residencias/ListResidencias";

// Auth Imports
import SignInCentered from "views/auth/signIn";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAccessibilityNew, MdAccountBalanceWallet, MdNextPlan, MdList, MdMedicalServices, MdMapsUgc, MdOutlinePermContactCalendar, 
  MdOutlineWork, MdOutlineBusAlert, MdOutlineCabin, MdGroup, MdOutlineCardTravel, MdBusiness  
} from "react-icons/md";
import Consultas from "views/admin/servicoMedico";
import ListEstoque from "views/admin/estoque/ListEstoque";
import ListTransporte from "views/admin/transporte/ListTransporte";
import ListRelatorio from "views/admin/relatorio/ListRelatorio";
import ListContabilidade from "views/admin/contabilidade/ListContabilidade";
import ListCondominio from "views/admin/condominio/listCondominio";
import ListMorador from "views/admin/morador/listMorador";



const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Condomínio",
    layout: "/admin",
    path: "/condominio",
    icon: 
      <Icon as={MdOutlineCabin} width='20px' height='20px' color='inherit' />,
    
    component: ListCondominio,
    secondary: true,
  },

  {
    name: "Morador",
    layout: "/admin",
    path: "/morador",
    icon: 
      <Icon as={MdGroup} width='20px' height='20px' color='inherit' />,
    
    component: ListMorador,
    secondary: true,
  },

  {
    name: "Funcionários",
    layout: "/admin",
    path: "/funcionario",
    icon: 
      <Icon as={MdOutlineCardTravel } width='20px' height='20px' color='inherit' />,
    
    component: ListFuncionario,
    secondary: true,
  },

  {
    name: "Visitantes",
    layout: "/admin",
    path: "/visitantes",
    icon: 
      <Icon as={MdOutlinePermContactCalendar} width='20px' height='20px' color='inherit' />,
    
    component: ListVisitantes,
    secondary: true,
  },

  {
    name: "Residências",
    layout: "/admin",
    path: "/residencias",
    icon: 
      <Icon as={MdBusiness} width='20px' height='20px' color='inherit' />,
    
    component: ListResidencias,
    secondary: true,
  },
 

  {
    name: "Estoque",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/estoque",
    component: ListEstoque,
  },

  {
    name: "Vagas de Estacionamento",
    layout: "/admin",
    icon: <Icon as={MdOutlineBusAlert} width='20px' height='20px' color='inherit' />,
    path: "/trasnporte",
    component: ListTransporte,
  },

  {
    name: "Contabilidade",
    layout: "/admin",
    icon: <Icon as={MdOutlineWork} width='20px' height='20px' color='inherit' />,
    path: "/contabilidade",
    component: ListContabilidade,
  },



  {
    name: "Relatórios",
    layout: "/admin",
    icon: <Icon as={MdAccountBalanceWallet} width='20px' height='20px' color='inherit' />,
    path: "/relatorio",
    component: ListRelatorio,
  },
  
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
];

export default routes;
