window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });
  
  createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>StartDate</th><th>Actions</th>";
  
    const innerHtml = `${headerHtml}
    <tr>
      <td class="profile"><img alt="" src="../assets/profile-images/Ellipse -5.png">
      </td>
      <td>Robert Bosch</td>
      <td>Male</td>
      <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Finance</div>
      </td>
      <td>450000</td>
      <td>1 Jan 2021</td>
      <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
      </td>
    </tr>
      `;
    document.querySelector('#table-display').innerHTML = innerHtml;
  }