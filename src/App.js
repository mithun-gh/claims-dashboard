import React, { useEffect, useState } from "react";

import { getClaims } from "./api";
import { Row, Column } from "./components";
import { format } from "./utils/date";

function App() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setClaims(await getClaims());
    }
    fetchData();
  }, []);

  return (
    <>
      <Row header>
        <Column>Claimant</Column>
        <Column>Assigned</Column>
        <Column>Status</Column>
        <Column>Created</Column>
        <Column>Updated</Column>
      </Row>
      {claims.map((claim) => (
        <Row key={claim.id}>
          <Column>{claim.claimant}</Column>
          <Column>{claim.assignedTo}</Column>
          <Column>{claim.status}</Column>
          <Column>{format(claim.createdAt)}</Column>
          <Column>{format(claim.updatedAt)}</Column>
        </Row>
      ))}
    </>
  );
}

export default App;
