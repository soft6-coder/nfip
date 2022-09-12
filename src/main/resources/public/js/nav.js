let isNavActive;
let isStatesActive;
let isStaffsActive;

let isDepartmentActive;
let isUnitActive;

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  let targetClassList = e.target.classList;

  if (targetClassList.contains("hamburger")) {
    if (!isNavActive) {
      document.getElementById("side-nav").style.display = "block";
    } else {
      document.getElementById("side-nav").style.display = "none";
    }
    isNavActive = !isNavActive;
    targetClassList.toggle("is-active");
  } else if (targetClassList.contains("states")) {
    if (!isStatesActive) {
      document.getElementById("states-dropdown").textContent = "expand_less";
      document.getElementById("states-options").style.display = "block";
    } else {
      document.getElementById("states-dropdown").textContent = "expand_more";
      document.getElementById("states-options").style.display = "none";
    }
    isStatesActive = !isStatesActive;
  } else if (targetClassList.contains("staffs")) {
    if (!isStaffsActive) {
      document.getElementById("staffs-dropdown").textContent = "expand_less";
      document.getElementById("staffs-options").style.display = "block";
    } else {
      document.getElementById("staffs-dropdown").textContent = "expand_more";
      document.getElementById("staffs-options").style.display = "none";
    }
    isStaffsActive = !isStaffsActive;
  } else if (targetClassList.contains("staffs-levels")) {
    STAFFS.forEach(function (item) {
      if (item.id == targetId && item.departments.length == 0) {
        location.href = `./staffs.html?id=${targetId}`;
      } else if (item.id == targetId && item.departments.length > 0) {
        let levels = document.querySelectorAll(".levels");
        levels.forEach(function (item) {
          document.getElementById(item.id).innerHTML = "";
          document.getElementById(item.id).style.display = "none";
        });
        item.departments.forEach(function (departmentItem, departmentIndex) {
          let staffsDepartmentHrDisplay = "block";
          let staffsDepartmentDropdownDisplay = "block";
          if (item.departments.length == departmentIndex + 1) {
            staffsDepartmentHrDisplay = "none";
          }
          if (departmentItem.unit.length == 0) {
            staffsDepartmentDropdownDisplay = "none";
          }
          document.getElementById(
            `${targetId}-staffs-department-options`
          ).innerHTML += bindStaffsDepartment(
            item,
            departmentItem,
            staffsDepartmentHrDisplay,
            staffsDepartmentDropdownDisplay
          );
        });
        document.getElementById(
          `${targetId}-staffs-department-options`
        ).style.display = "block";
      }
    });
  } else if (targetClassList.contains("staffs-units")) {
    STAFFS.forEach(function (item) {
      if (item.id == targetId) {
        item.departments.forEach(function (departmentItem) {
          if (departmentItem.id == e.target.nextElementSibling.value) {
            if (departmentItem.unit.length == 0) {
              location.href = `./staffs.html?id=${targetId}&department`;
            } else {
              let departmentLevels =
                document.querySelectorAll(".department-levels");
              departmentLevels.forEach(function (item) {
                document.getElementById(item.id).innerHTML = "";
                document.getElementById(item.id).style.display = "none";
              });
            }
            departmentItem.unit.forEach(function (unitItem) {
              document.getElementById(
                `${departmentItem.id}-units-options`
              ).innerHTML += bindStaffsUnits(item.id, unitItem);
            });
            document.getElementById(
              `${departmentItem.id}-units-options`
            ).style.display = "block";
          }
        });
      }
    });
  }
});

STATES.forEach(function (item) {
  document.getElementById("states-options").innerHTML += bindStates(item);
});

STAFFS.forEach(function (item, index) {
  let staffsHrDisplay = "block";
  let staffsDropdownDisplay = "block";
  if (STAFFS.length == index + 1) {
    staffsHrDisplay = "none";
  }
  if (item.departments.length == 0) {
    staffsDropdownDisplay = "none";
  }
  document.getElementById("staffs-options").innerHTML += bindStaffs(
    item,
    staffsHrDisplay,
    staffsDropdownDisplay
  );
});

function bindStaffs(staff, hrDisplay, dropdownDisplay) {
  return `<div style="width: 100%"><span id="${staff.id}" class="medium bold color-dark no-margin-2 staffs-levels" style="text-transform: capitalize; padding: 0px 8px">${staff.type} staffs</span>
  <span
      id="staffs-levels-dropdown"
      class="material-symbols-outlined w3-right color-dark"
      style="padding: 4px 0px 0px 8px; display: ${dropdownDisplay}; font-size: 20px;"
      >
      expand_more
      </span>
      <div
        id="${staff.id}-staffs-department-options"
        class="w3-bar-block w3-round levels"
        style="display: none; padding: 8px 0px 8px 14px;"
        ></div>
        <hr class="hr" style="display: ${hrDisplay}" />
  </div>`;
}

function bindStaffsDepartment(
  staff,
  departmentItem,
  hrDisplay,
  dropdownDisplay
) {
  return `
  <div style="width: 100%"><span id="${staff.id}" class="medium-2 bold color-dark no-margin-2 staffs-units" style="text-transform: capitalize; padding: 0px 8px">${departmentItem.department} department</span>
  <input type="hidden" value="${departmentItem.id}">
  <span
      id="staffs-units-dropdown"
      class="material-symbols-outlined w3-right color-dark"
      style="padding: 4px 0px 0px 8px; display: ${dropdownDisplay}; font-size: 20px;"
      >
      expand_more
      </span>
      <div
        id="${departmentItem.id}-units-options"
        class="w3-bar-block w3-round department-levels"
        style="display: none; padding: 0px 0px 0px 14px;"
        ></div>
        <hr class="hr" style="display: ${hrDisplay}" />
  </div>`;
}

function bindStaffsUnits(staff, unit) {
  return `
  <div style="width: 100%"><span id="${staff.id}" class="small bold color-dark no-margin-2 staffs-units" style="text-transform: capitalize; padding: 0px 8px">${unit}</span>
  </div>`;
}

function bindStates(state) {
  return `<a href="./states.html?id=${state.id}"><div><p class="medium no-margin-3" style="text-transform: capitalize;">${state.name}</p></div></a>`;
}
