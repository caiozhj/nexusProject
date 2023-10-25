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


// Auth Imports
import SignInCentered from "views/auth/signIn";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdAccessibilityNew, MdAccountBalanceWallet, MdNextPlan, MdList, MdMedicalServices, MdMapsUgc, MdOutlinePermContactCalendar, MdOutlineWork, MdOutlineBusAlert
} from "react-icons/md";
import Consultas from "views/admin/servicoMedico";
import ListEstoque from "views/admin/estoque/ListEstoque";



const routes = [
  {
    name: "Nexus Solutions",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: " Serviço Médico",
    layout: "/admin",
    path: "/servico-medico",
    icon: 
      <Icon as={MdMedicalServices} width='20px' height='20px' color='inherit' />,
    
    component: ListMedico,
    secondary: true,
  },

  {
    name: "Consultas",
    layout: "/admin",
    path: "/consultas",
    icon: 
      <Icon as={MdMapsUgc} width='20px' height='20px' color='inherit' />,
    
    component: ListConsulta,
    secondary: true,
  },

  {
    name: "Pacientes",
    layout: "/admin",
    path: "/Pacientes",
    icon: 
      <Icon as={MdOutlinePermContactCalendar} width='20px' height='20px' color='inherit' />,
    
    component: Paciente,
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
    name: "Transporte",
    layout: "/admin",
    icon: <Icon as={MdOutlineBusAlert} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },

  {
    name: "Contabilidade",
    layout: "/admin",
    icon: <Icon as={MdOutlineWork} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },



  {
    name: "Relatórios",
    layout: "/admin",
    icon: <Icon as={MdAccountBalanceWallet} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
