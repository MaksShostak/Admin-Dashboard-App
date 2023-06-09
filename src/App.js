import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import SideBar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard/index';
import Team from './scenes/team/index';
import Invoices from './scenes/invoices/index';
import Contacts from './scenes/contacts/index';
import Form from './scenes/profile-form/index';
import Calendar from './scenes/calendar/index';
import FAQ from './scenes/faq/index';
import Bar from './scenes/bar/index';
import Line from './scenes/line/index';
import Pie from './scenes/pie/index';
import Geography from './scenes/geography/index';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ProSidebarProvider>
            <div className="app">
              <SideBar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/geography" element={<Geography />} />
                </Routes>
              </main>
            </div>
          </ProSidebarProvider>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
