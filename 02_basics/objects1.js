// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
tinderUser.age =28

 //console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
 //console.log(regularUser.email);
 //console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2,...obj4}
 //console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    },
    {
        id: 3,
        email: "j@gmail.com"
    },
]

//console.log(users[1].email);
 //console.log(tinderUser);

//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
//console.log(Object.keys(tinderUser));

 //console.log(tinderUser.hasOwnProperty('age'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor


 const {courseInstructor: instructor} = course

//console.log(courseInstructor);
 //console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

const tson ={
    "externalId": "MI4300031060",
    "orderCurrency": "USD",
    "requestedCompletionDate": "2024-09-27",
    "@type": "ProductOrder",
    "dispositionComments": "PORT OUT",
    "relatedParty": [
      {
        "id": "300819011",
        "@type": "RelatedParty",
        "@referredType": "Consumer"
      }
    ],
    "productOrderItem": [
      {
        "id": 1,
        "action": "delete",
        "product": {
          "id": "PI1676064",
          "productSpecification": {
            "id": "Copper_POTS",
            "@type": "ProductSpecificationRef"
          },
          "productCharacteristic": [
            {
              "name": "PRODUCT_ID",
              "value": "8106396851"
            },
            {
              "name": "additionalInfo",
              "value": "{\"telecomServicePriority\":\"\"}"
            },
            {
              "name": "PRODUCT_TYPE",
              "value": "IL"
            },
            {
              "name": "ServiceType",
              "value": "POTS"
            },
            {
              "name": "featureCode",
              "value": "2003ML"
            },
            {
              "name": "telephoneNum",
              "value": "18106396851"
            },
            {
              "name": "PRODUCT_SUB_TYPE",
              "value": "PT"
            },
            {
              "name": "isParent",
              "value": "False"
            }
          ],
          "place": {
            "id": "400000008905040",
            "@type": "Place"
          },
          "@type": "Product"
        },
        "@type": "ProductOrderItem",
        "productOffering": {
          "id": "2003ML",
          "name": "Access Recovery Charge",
          "externalProductId": ""
        }
      },
      {
        "id": 2,
        "action": "delete",
        "product": {
          "id": "PI1676061",
          "productSpecification": {
            "id": "Copper_POTS",
            "@type": "ProductSpecificationRef"
          },
          "productCharacteristic": [
            {
              "name": "PRODUCT_ID",
              "value": "8106396851"
            },
            {
              "name": "additionalInfo",
              "value": "{\"telecomServicePriority\":\"\"}"
            },
            {
              "name": "PRODUCT_TYPE",
              "value": "IL"
            },
            {
              "name": "ServiceType",
              "value": "POTS"
            },
            {
              "name": "featureCode",
              "value": "2000"
            },
            {
              "name": "telephoneNum",
              "value": "18106396851"
            },
            {
              "name": "PRODUCT_SUB_TYPE",
              "value": "PT"
            },
            {
              "name": "isParent",
              "value": "False"
            }
          ],
          "place": {
            "id": "400000008905040",
            "@type": "Place"
          },
          "@type": "Product"
        },
        "@type": "ProductOrderItem",
        "productOffering": {
          "id": "2000",
          "name": "Subscriber Line Charge",
          "externalProductId": ""
        }
      },
      {
        "id": 3,
        "action": "delete",
        "product": {
          "id": "PI1676063",
          "productSpecification": {
            "id": "Copper_POTS",
            "@type": "ProductSpecificationRef"
          },
          "productCharacteristic": [
            {
              "name": "classOfService",
              "value": "MLB"
            },
            {
              "name": "isParent",
              "value": "True"
            },
            {
              "name": "PRODUCT_SUB_TYPE",
              "value": "PT"
            },
            {
              "name": "featureCode",
              "value": "1178"
            },
            {
              "name": "telephoneNum",
              "value": "18106396851"
            },
            {
              "name": "PRODUCT_ID",
              "value": "8106396851"
            },
            {
              "name": "additionalInfo",
              "value": "{\"telecomServicePriority\":\"\"}"
            },
            {
              "name": "PRODUCT_TYPE",
              "value": "IL"
            },
            {
              "name": "ServiceType",
              "value": "POTS"
            }
          ],
          "place": {
            "id": "400000008905040",
            "@type": "Place"
          },
          "@type": "Product"
        },
        "@type": "ProductOrderItem",
        "productOffering": {
          "id": "1178",
          "name": "1 Pty Business 7+ Lines",
          "externalProductId": ""
        }
      },
      {
        "id": 4,
        "action": "delete",
        "product": {
          "id": "PI1676062",
          "productSpecification": {
            "id": "Copper_POTS",
            "@type": "ProductSpecificationRef"
          },
          "productCharacteristic": [
            {
              "name": "isParent",
              "value": "False"
            },
            {
              "name": "PRODUCT_SUB_TYPE",
              "value": "PT"
            },
            {
              "name": "featureCode",
              "value": "2035"
            },
            {
              "name": "telephoneNum",
              "value": "18106396851"
            },
            {
              "name": "PRODUCT_ID",
              "value": "8106396851"
            },
            {
              "name": "additionalInfo",
              "value": "{\"telecomServicePriority\":\"\"}"
            },
            {
              "name": "PRODUCT_TYPE",
              "value": "IL"
            },
            {
              "name": "ServiceType",
              "value": "POTS"
            }
          ],
          "place": {
            "id": "400000008905040",
            "@type": "Place"
          },
          "@type": "Product"
        },
        "@type": "ProductOrderItem",
        "productOffering": {
          "id": "2035",
          "name": "State Fund",
          "externalProductId": ""
        }
      },
      {
        "id": 5,
        "action": "delete",
        "product": {
          "id": "PI1676060",
          "productSpecification": {
            "id": "Copper_POTS",
            "@type": "ProductSpecificationRef"
          },
          "productCharacteristic": [
            {
              "name": "isParent",
              "value": "False"
            },
            {
              "name": "PRODUCT_SUB_TYPE",
              "value": "PT"
            },
            {
              "name": "additionalInfo",
              "value": "{\"telecomServicePriority\":\"\"}"
            },
            {
              "name": "PRODUCT_ID",
              "value": "8106396851"
            },
            {
              "name": "PRODUCT_TYPE",
              "value": "IL"
            },
            {
              "name": "ServiceType",
              "value": "POTS"
            },
            {
              "name": "featureCode",
              "value": "LNP5"
            },
            {
              "name": "telephoneNum",
              "value": "18106396851"
            }
          ],
          "place": {
            "id": "400000008905040",
            "@type": "Place"
          },
          "@type": "Product"
        },
        "@type": "ProductOrderItem",
        "productOffering": {
          "id": "LNP5",
          "name": "Local Number Portability",
          "externalProductId": ""
        }
      },
      {
        "id": 6,
        "action": "delete",
        "product": {
          "id": "PI1676065",
          "productSpecification": {
            "id": "Copper_POTS",
            "@type": "ProductSpecificationRef"
          },
          "productCharacteristic": [
            {
              "name": "isParent",
              "value": "False"
            },
            {
              "name": "PRODUCT_SUB_TYPE",
              "value": "PT"
            },
            {
              "name": "ServiceType",
              "value": "POTS"
            },
            {
              "name": "featureCode",
              "value": "FACRB"
            },
            {
              "name": "telephoneNum",
              "value": "18106396851"
            },
            {
              "name": "PRODUCT_ID",
              "value": "8106396851"
            },
            {
              "name": "additionalInfo",
              "value": "{\"telecomServicePriority\":\"\"}"
            },
            {
              "name": "PRODUCT_TYPE",
              "value": "IL"
            }
          ],
          "place": {
            "id": "400000008905040",
            "@type": "Place"
          },
          "@type": "Product"
        },
        "@type": "ProductOrderItem",
        "productOffering": {
          "id": "FACRB",
          "name": "Facility Relocation Fee BUS",
          "externalProductId": ""
        }
      }
    ],
    "stateCode": "MI",
    "lastService": false,
    "orderSubType": "PORT OUT",
    "networkType": "Copper",
    "lspId": 7125,
    "pon": "POA0000000019536",
    "dueDate": "2024-09-27"
  }

  console.log(tson.networkType);
